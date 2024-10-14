# Use the official Python 3.12.2 image from Docker Hub 
FROM python:3.12.2-slim 

# Set environment variables to avoid issues with Python output buffering 
ENV PYTHONDONTWRITEBYTECODE=1 
ENV PYTHONUNBUFFERED=1 

# Set the working directory in the container 
WORKDIR /app

# Install system dependencies 
RUN apt-get update && apt-get install -y \ 
    libpq-dev gcc python3-dev musl-dev \ 
    && apt-get clean

# Copy the requirements to the container
COPY requirements.txt /app/

# Install Python dependencies 
RUN pip install --no-cache-dir -r requirements.txt 

# Copy the rest of the application code into the container 
COPY . /app/ 

# Open port 8000 for Django 
EXPOSE 8000 

# Define environment variable
ENV DJANGO_ENV=production

# Run the Django server by default 
CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]