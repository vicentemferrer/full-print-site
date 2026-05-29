'use client';

import React from 'react';
import { Lock, MapPin, Clock, MessageCircle, Star, Instagram, Facebook, MessageSquare } from 'lucide-react';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      {/* Feature Cards Section */}
      <section className={styles.featuresSection}>
        <div className={styles.featuresGrid}>
          {/* Paga fácil y seguro */}
          <div className={styles.featureCard}>
            <div className={`${styles.featureCardBorder} ${styles.borderMagenta}`}></div>
            <Lock className={styles.featureIcon} style={{ color: '#F4147E' }} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Paga fácil y seguro</h3>
              <p className={styles.featureText}>Múltiples medios de pago para tu comodidad.</p>
            </div>
            <div className={styles.paymentMethods}>
              <div className={styles.paymentMethod}>
                <span className={styles.paymentLogo}>Webpay Plus</span>
              </div>
              <div className={styles.paymentMethod}>
                <span className={styles.bankIcon}>🏦</span>
                <span className={styles.paymentText}>Transferencia<br/>Bancos de Chile</span>
              </div>
            </div>
            <div className={styles.securityNote}>
              <Lock size={14} />
              <span>Tus datos y pagos están protegidos.</span>
            </div>
          </div>

          {/* Retiro en tienda */}
          <div className={styles.featureCard}>
            <div className={`${styles.featureCardBorder} ${styles.borderCyan}`}></div>
            <MapPin className={styles.featureIcon} style={{ color: '#00AEEF' }} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Retiro en tienda</h3>
              <p className={styles.featureText}>Sin envíos, sin esperas. Te avisamos cuando esté listo.</p>
            </div>
            <div className={styles.storeInfo}>
              <div className={styles.infoItem}>
                <MapPin size={16} />
                <div>
                  <p className={styles.infoLabel}>Retiro en Ancud</p>
                  <p className={styles.infoText}>Eleuterio Ramírez 123<br/>Ancud, Chiloé</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <Clock size={16} />
                <div>
                  <p className={styles.infoLabel}>Horario de atención</p>
                  <p className={styles.infoText}>Lunes a Viernes<br/>09:00 - 18:00 hrs</p>
                </div>
              </div>
              <div className={styles.infoItem}>
                <MessageCircle size={16} />
                <p className={styles.infoText}>Para envíos a regiones, contáctanos por WhatsApp</p>
              </div>
            </div>
          </div>

          {/* Clientes que confían en nosotros */}
          <div className={styles.featureCard}>
            <div className={`${styles.featureCardBorder} ${styles.borderYellow}`}></div>
            <Star className={styles.featureIcon} style={{ color: '#FFD400' }} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Clientes que confían en nosotros</h3>
              <p className={styles.featureText}>Calidad, compromiso y resultados que hablan por nosotros.</p>
            </div>
            <div className={styles.googleReview}>
              <div className={styles.googleLogo}>Google</div>
              <div className={styles.ratingInfo}>
                <span className={styles.rating}>4.9 / 5.0</span>
                <div className={styles.stars}>★★★★★</div>
              </div>
              <p className={styles.reviewCount}>Basado en +340 reseñas</p>
              <a href="#" className={styles.reviewLink}>Ver reseñas en Google →</a>
            </div>
          </div>

          {/* Hablemos */}
          <div className={styles.featureCard}>
            <div className={`${styles.featureCardBorder} ${styles.borderMagenta}`}></div>
            <MessageCircle className={styles.featureIcon} style={{ color: '#F4147E' }} />
            <div className={styles.featureContent}>
              <h3 className={styles.featureTitle}>Hablemos</h3>
              <p className={styles.featureText}>Síguenos y contáctanos por tus canales favoritos.</p>
            </div>
            <div className={styles.socialLinks}>
              <a href="#" className={styles.socialIcon} aria-label="Instagram">
                <Instagram size={28} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Facebook">
                <Facebook size={28} />
              </a>
              <a href="#" className={styles.socialIcon} aria-label="WhatsApp">
                <MessageSquare size={28} />
              </a>
            </div>
            <a href="#" className={styles.whatsappButton}>
              <MessageCircle size={16} />
              Escribenos por WhatsApp
            </a>
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className={styles.newsletterSection}>
        <div className={styles.newsletterContent}>
          <div className={styles.newsletterInfo}>
            <div className={styles.logoWithDescription}>
              <div className={styles.logoCircle}>FP</div>
              <div>
                <h3 className={styles.newsletterTitle}>Recibe ofertas exclusivas y novedades de impresión</h3>
                <p className={styles.newsletterSubtitle}>Prometemos no spameare.</p>
              </div>
            </div>
          </div>
          <div className={styles.newsletterForm}>
            <input 
              type="email" 
              placeholder="Ingresa tu correo electrónico" 
              className={styles.emailInput}
            />
            <button className={styles.subscribeButton}>Subscribirme →</button>
          </div>
          <div className={styles.newsletterGraphic}>✉️</div>
        </div>
      </section>

      {/* Links and Info Section */}
      <section className={styles.linksSection}>
        <div className={styles.linksGrid}>
          {/* Company Info */}
          <div className={styles.linkColumn}>
            <div className={styles.footerLogo}>
              <div className={styles.logoCircle}>FP</div>
              <div>
                <h4 className={styles.companyName}>FULL PRINT</h4>
                <p className={styles.companySubtitle}>CENTRO DE IMPRESIONES</p>
              </div>
            </div>
            <p className={styles.companyDescription}>
              Impresión profesional de alta calidad para empresas, emprendedores y personas en todo Chiloé.
            </p>
            <div className={styles.heartIcon}>❤️</div>
          </div>

          {/* Useful Links */}
          <div className={styles.linkColumn}>
            <h4 className={styles.linksTitle}>Enlaces útiles</h4>
            <nav className={styles.linksList}>
              <a href="#" className={styles.link}>
                <span>Privacidad y Política de Datos</span>
                <span>›</span>
              </a>
              <a href="#" className={styles.link}>
                <span>Términos y Condiciones</span>
                <span>›</span>
              </a>
              <a href="#" className={styles.link}>
                <span>Preguntas Frecuentes</span>
                <span>›</span>
              </a>
              <a href="#" className={styles.link}>
                <span>Cambios y Devoluciones</span>
                <span>›</span>
              </a>
            </nav>
          </div>

          {/* Help Section */}
          <div className={styles.linkColumn}>
            <div className={styles.helpBox}>
              <MessageCircle size={24} />
              <div>
                <p className={styles.helpTitle}>¿Dudas o consultas?</p>
                <p className={styles.helpText}>Escribenos por WhatsApp y te ayudamos.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Copyright Footer */}
      <div className={styles.copyrightSection}>
        <p className={styles.copyright}>© 2026 Full Print SpA. Todos los derechos reservados.</p>
        <p className={styles.designCredit}>Diseñado con <span className={styles.heart}>❤</span> en Chiloé</p>
      </div>

    </footer>
  );
}
