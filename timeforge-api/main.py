import os
from fastapi import FastAPI
from supabase import create_client, Client
from dotenv import load_dotenv

# 1. Load your credentials from the .env file
load_dotenv()

# 2. Get your Supabase keys securely
SUPABASE_URL = os.getenv("SUPABASE_URL")
SUPABASE_KEY = os.getenv("SUPABASE_KEY")

# 3. Initialize the global Supabase client
# This client will be used to interact with your database in future routes
supabase: Client = create_client(SUPABASE_URL, SUPABASE_KEY)

# 4. Create the FastAPI app
app = FastAPI(title="Time-Forge API")

@app.get("/")
def read_root():
    return {
        "status": "Operational",
        "message": "Time-Forge API is running and connected to Supabase."
    }

# Example of how you will fetch data later:
@app.get("/test-db")
def test_db():
    # This is a placeholder for your future role/user queries
    return {"message": "Database client is active."}