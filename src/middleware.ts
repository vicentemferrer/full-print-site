import { defineMiddleware } from "astro:middleware";
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || "super-secret-key-for-dev";

export const onRequest = defineMiddleware((context, next) => {
  // Proteger rutas que empiecen por /admin
  if (context.url.pathname.startsWith('/admin')) {
    const token = context.cookies.get("admin_session")?.value;

    if (!token) {
      return context.redirect("/login");
    }

    try {
      // Verify token
      jwt.verify(token, JWT_SECRET);
      // If valid, continue
    } catch (err) {
      // If invalid or expired, redirect to login
      return context.redirect("/login");
    }
  }
  return next();
});
