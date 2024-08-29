import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { postData, deleteData } from "@/services/ApiService";
import AddAccount from "@/components/Modal/AddAccount";

// Agrego cuenta
export const addAccount = createAsyncThunk(
    "accounts/addAccount",
    async (accountData, { rejectWithValue }) => {
      console.log("ACCOUNT DATA: ", accountData);
      try {
        const response = await postData("/accounts/profiles/", accountData);

        console.log("Respuesta de envío de datos para agregar cuentas: ", accountData);
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


const accountSlice = createSlice({
    name: "accounts",
    initialState: {
        accounts: [],
        status: "idle",
        error: null
    },
    reducers: {
        fetchAccountsStart(state) {
            state.status = "loading";
        },
        fetchAccountsSuccess(state, action) {
            state.accounts = action.payload;
            state.status = "succeeded";
        },
        fetchAccountsFailure(state, action) {
            state.error = action.payload;
            state.status = "failed";
        }
    },
    extraReducers: (builder) => {
        // AGREGAR CUENTA
        builder
        .addCase(addAccount.pending, (state) => {
            state.status = "loading";
        })
        .addCase(addAccount.fulfilled, (state, action) => {
            console.log("CUENTA AÑADIDA: ", action.payload);
            state.status = "succeeded";
            state.accounts.push(action.payload);
        })
        .addCase(addAccount.rejected, (state, action) => {
            console.log("ERROR AL AÑADIR CLÍNICA: ", action.payload);
            state.status = "failed";
            state.error = action.payload;
        })

        // ELIMINAR CUENTA
        .addCase(deleteAccount.pending, (state) => {
            state.status = "loading";
        })
        .addCase(deleteAccount.fulfilled, (state, action) => {
            console.log("CUENTA ELIMINADA: ", action.payload);
            
            state.status = "succeeded";
            state.clinics = state.clinics.filter((clinic) => clinic.id !== action.payload.id);
        })
        .addCase(deleteAccount.rejected, (state, action) => {
            console.log("ERROR AL ELIMINAR LA CUENTA: ", action.payload);
            state.status = "failed";
            state.error = action.payload;
        })
    }
});

export const { fetchAccountsStart, fetchAccountsSuccess, fetchAccountsFailure } = accountSlice.actions;

export default accountSlice.reducer;