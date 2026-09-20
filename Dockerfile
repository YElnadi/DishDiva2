FROM node:16-bullseye AS frontend

WORKDIR /app/react-app
COPY react-app/package.json ./
RUN npm install --legacy-peer-deps
COPY react-app/ ./
RUN npm run build

FROM python:3.9-slim-bullseye AS runtime

ENV PYTHONDONTWRITEBYTECODE=1 \
    PYTHONUNBUFFERED=1 \
    FLASK_APP=app

WORKDIR /app

RUN apt-get update \
    && apt-get install --no-install-recommends -y gcc libpq-dev \
    && rm -rf /var/lib/apt/lists/*

COPY requirements.txt ./
RUN pip install --no-cache-dir -r requirements.txt

COPY . .
COPY --from=frontend /app/react-app/build ./react-app/build

EXPOSE 8080

CMD ["sh", "-c", "flask db upgrade && gunicorn app:app --bind 0.0.0.0:${PORT:-8080}"]
