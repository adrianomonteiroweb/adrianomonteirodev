import dotenv from 'dotenv';
import cors from 'cors';
import path from 'path';
dotenv.config({ path: path.join(__dirname, '../../server/.env') });

import app from './app';

import routes from './routes';

app.use(routes);
app.use(
  cors({
    origin:
      'https://adrianomonteirodev-server-2ulhxmpt0-adrianomonteiroweb.vercel.app/',
    methods: 'GET',
  })
);

const PORT = process.env.PORT || 3001;
const HOST = process.env.HOST || 'localhost';

app.listen(PORT, () => {
  const statusServer =
    process.env.NODE_ENV === 'test'
      ? `Server running on http://${HOST}:${PORT}`
      : `Server running on ${process.env.DEPLOY_URL}`;

  console.log(statusServer);
});
