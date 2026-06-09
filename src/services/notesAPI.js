import axios from 'axios'

const API_URL = "https://tikotffslattjodlnooi.supabase.co/rest/v1/notes"
const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRpa290ZmZzbGF0dGpvZGxub29pIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA5NDQ3NzUsImV4cCI6MjA5NjUyMDc3NX0.RZOBws_o7h5ChCCMjmkrbg9m1JXNXXUPH7oZD_RVzWk"

const headers = {
    apikey: API_KEY,
    Authorization: `Bearer ${API_KEY}`,
    "Content-Type": "application/json",
}

export const notesAPI = {
    async fetchNotes() {
        const response = await axios.get(API_URL, { headers })
        return response.data
    },

    async createNote(data) {
        const response = await axios.post(API_URL, data, { headers })
        return response.data
    },

    async deleteNote(id) {
        await axios.delete(`${API_URL}?id=eq.${id}`, { headers })
    }
}