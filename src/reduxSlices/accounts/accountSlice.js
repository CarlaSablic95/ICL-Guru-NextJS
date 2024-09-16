import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData, editData, deleteData } from "@/services/ApiService";

// Agrego cuenta
export const addAccount = createAsyncThunk(
    "accounts/addAccount",
    async (accountData, { rejectWithValue }) => {
      console.log("ACCOUNT DATA: ", accountData);
      try {
        const response = await postData("/accounts/profiles/", accountData);
        console.log("Respuesta de envío de datos para agregar cuentas: ", accountData);
        
        return response;
        // const { username, name, email  } = response;
        // return {
        //     username,
        //     name,
        //     email
        // };
      } catch (error) {
         return rejectWithValue(error.response.data);
      }
    }
)

// Edito cuenta
export const editAccount = createAsyncThunk(
    "accounts/editAccount",
    async ({ id, ...accountData }, { rejectWithValue }) => {
        console.log("EDIT ACCOUNT DATA: ", accountData);
        
        try {
            const response = await editData(`/accounts/profiles/${id}/`, accountData);
            console.log("Respuesta al editar datos de cuentas: ", response);
            return response;
        } catch (error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// Elimino cuenta
export const deleteAccount = createAsyncThunk(
    "accounts/deleteAccount",
    async ({id}, { rejectWithValue }) => {
        console.log("ACCOUNT DATA ID TO ELIMINATE: ", id);
        
        try {
            const response = await deleteData(`/accounts/profiles/${id}/`);
            console.log("Elimino la cuenta: ", response);
            
            return { id: id }
        } catch(error) {
            return rejectWithValue(error.response.data);
        }
    }
)

// Cambio de contraseña
export const updatePass = createAsyncThunk("accounts/updatePass", async ({ target_user_profile_id, current_password, new_password }, {rejectWithValue}) => {
    console.log("EDIT PASSWORD: ", { target_user_profile_id, current_password, new_password });
    try {
        const response = await postData("/accounts/change-password/", {
            target_user_profile_id,
            current_password,
            new_password
        });

        console.log("Respuesta al cambiar contraseña: ", response);
        return response;
    } catch (error) {
        return rejectWithValue(error.response.data);
    }
})

const accountSlice = createSlice({
    name: "accounts",
    initialState: {
        accounts: [],
        accountsStatus: "idle",
        error: null
    },
    reducers: {
        fetchAccountsStart(state) {
            state.accountsStatus = "loading";
        },
        fetchAccountsSuccess(state, action) {
            state.accounts = action.payload;
            state.accountsStatus = "succeeded";
        },
        fetchAccountsFailure(state, action) {
            state.error = action.payload;
            state.accountsStatus = "failed";
        },
        addClinicToAccount(state, action) {
            const { accountId, clinic } = action.payload;
            const account = state.accounts.find(acc => acc.id === accountId);
            if(account) {
                account.organizations.push(clinic);
            }
        },
        removeClinicFromAccount(state, action) {
            const {accountId, clinicId} = action.payload;
            const account = state.accounts.find(acc => acc.id === accountId);

            if(account) {
                account.organizations = account.organizations.filter(org => org.id !== clinicId);
            }
        }
    },
    extraReducers: (builder) => {
        // AGREGAR CUENTA
        builder
        .addCase(addAccount.pending, (state) => {
            state.accountsStatus = "loading";
        })
        .addCase(addAccount.fulfilled, (state, action) => {
            console.log("CUENTA AÑADIDA: ", action.payload);
            state.accountsStatus = "succeeded";
            state.accounts.push(action.payload);
            state.error = null;
        })
        .addCase(addAccount.rejected, (state, action) => {
            console.log("ERROR AL AÑADIR CUENTA: ", action.payload);
            state.accountsStatus = "failed";
            state.error = action.payload ? action.payload : "Error";
        })

        // ELIMINAR CUENTA
        .addCase(deleteAccount.pending, (state) => {
            state.accountsStatus = "loading";
        })
        .addCase(deleteAccount.fulfilled, (state, action) => {
            console.log("CUENTA ELIMINADA: ", action.payload);
            
            state.accountsStatus = "succeeded";
            state.clinics = state.clinics.filter((clinic) => clinic.id !== action.payload.id);
        })
        .addCase(deleteAccount.rejected, (state, action) => {
            console.log("ERROR AL ELIMINAR LA CUENTA: ", action.payload);
            state.accountsStatus = "failed";
            state.error = action.payload;
        })

        // ACTUALIZAR CONTRASEÑA
        .addCase(updatePass.pending, (state) => {
            state.accountsStatus = "loading";
        })
        .addCase(updatePass.fulfilled, (state, action) => {
            console.log("CONTRASEÑA CAMBIADA: ", action.payload);
            state.accountsStatus = "succeeded";
            state.accounts.push(action.payload);
            state.error = null;
        })
        .addCase(updatePass.rejected, (state, action) => {
            console.log("ERROR AL CAMBIAR CONTRASEÑA: ", action.payload);
            state.accountsStatus = "failed";
            state.error = action.payload ? action.payload : "Error";
        })
    }
});

export const { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure, addClinicToAccount, removeClinicFromAccount } = accountSlice.actions;

export default accountSlice.reducer;