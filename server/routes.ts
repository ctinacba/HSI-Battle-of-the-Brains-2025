import { Router, Request, Response } from 'express';
import { storage } from './storage.js';
import { isAuthenticated, validateCredentials } from './auth.js';

const router = Router();

router.post('/login', async (req: Request, res: Response) => {
  try {
    const { username, password } = req.body;

    if (!username || !password) {
      return res.status(400).json({ message: 'Username and password are required' });
    }

    if (!validateCredentials(username, password)) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    req.session.userId = username;
    res.json({ message: 'Login successful', user: { username } });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/logout', async (req: Request, res: Response) => {
  try {
    req.session.destroy((err) => {
      if (err) {
        console.error('Logout error:', err);
        return res.status(500).json({ message: 'Failed to logout' });
      }
      res.clearCookie('connect.sid');
      res.json({ message: 'Logout successful' });
    });
  } catch (error) {
    console.error('Logout error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/auth/user', async (req: Request, res: Response) => {
  try {
    if (req.session?.userId) {
      res.json({ user: { username: req.session.userId } });
    } else {
      res.status(401).json({ message: 'Not authenticated' });
    }
  } catch (error) {
    console.error('Auth check error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.post('/contact', async (req: Request, res: Response) => {
  try {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    const submission = await storage.createContactSubmission({ name, email, message });
    res.json({ message: 'Contact form submitted successfully', submission });
  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

router.get('/contact/submissions', isAuthenticated, async (req: Request, res: Response) => {
  try {
    const submissions = await storage.getContactSubmissions();
    res.json({ submissions });
  } catch (error) {
    console.error('Get submissions error:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;
