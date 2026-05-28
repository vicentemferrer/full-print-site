import { defineMiddleware } from "astro:middleware";

export const onRequest = defineMiddleware((context, next) => {
  // Proteger rutas que empiecen por /admin
  if (context.url.pathname.startsWith("/admin")) {
    const session = context.cookies.get("admin_session")?.value;
    if (session !== "true") {
      return context.redirect("/login");
    }
  }
  return next();
});
