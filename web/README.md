# Getting Started

First, clone the repository:

```bash
git clone git@github.com:BuraVPN/BuraVPN.git
```

Navigate to the web directory:

```bash
cd web
```

Create a `.env` file in the web directory with the following variables:

```properties
#landing
RESEND_API_KEY="resend-api-key"
RESEND_FROM_EMAIL="your-email"

#dashboard
DATABASE_URL="database-url"
NETBIRD_API_KEY="netbird-api-key"
NETBIRD_API_URL="netbird-api-url"
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
