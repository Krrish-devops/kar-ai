import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import toast from 'react-hot-toast';

// Define types for form data and state
const Api_Url='http://localhost:8080/contacts/'
interface FormData {
  name: string;
  email: string;
  subject: string;
  phone: string;
  message: string;
}

interface ContactState {
  loading: boolean;
  error: string | null;
  success: boolean;
}

// Async thunk to post data to the Go API
export const postContactForm = createAsyncThunk(
  'contact/postContactForm',
  async (formData: FormData, { rejectWithValue }) => {
    try {
      const response = await fetch(Api_Url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error('Error in submitting form');
      }

      return await response.json();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

const contactSlice = createSlice({
  name: 'contact',
  initialState: {
    loading: false,
    error: null,
    success: false,
  } as ContactState,
  reducers: {
    resetState: (state) => {
      state.loading = false;
      state.error = null;
      state.success = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(postContactForm.pending, (state) => {
        state.loading = true;
      })
      .addCase(postContactForm.fulfilled, (state) => {
        state.loading = false;
        state.success = true;
        toast.success('Thank you for approaching our team. We will contact you soon');
      })
      .addCase(postContactForm.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
        toast.error('There was an error submitting your form. Please try again later.');
      });
  },
});

export const { resetState } = contactSlice.actions;
export default contactSlice.reducer;


