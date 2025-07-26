import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  uploadedFiles: [],
  summaries: [],
  loading: false,
};

const summarySlice = createSlice({
  name: 'summary',
  initialState,
  reducers: {
    uploadFile: (state, action) => {
      state.uploadedFiles.push(action.payload);
    },
    addSummary: (state, action) => {
      state.summaries.push(action.payload);
    },
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
  },
});

export const { uploadFile, addSummary, setLoading } = summarySlice.actions;
export default summarySlice.reducer;
