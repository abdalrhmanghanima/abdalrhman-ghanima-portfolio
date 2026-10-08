import React from 'react';
import { SectionHeader } from '../components/SectionHeader';
import { siteConfig } from '../config/siteConfig';
import {
  LayersIcon,
  CloudIcon,
  SmartphoneIcon,
} from '../components/Icons';

export const AboutSection: React.FC = () => {
  return (
    <section id="about" className="section" aria-label="About Me">
      <div className="container">
        <SectionHeader
          kicker="01. About Me"
          title="Engineering Scalable Mobile Experiences"
          description="A look into my background, technical philosophy, and engineering approach to cross-platform mobile software."
        />

        <div className="about-grid">
          {/* Main Narrative Card */}
          <div data-reveal className="about-card reveal-fade-up">
            <p className="about-paragraph">
              I am a <strong>Junior Flutter Developer</strong> with hands-on
              experience building <strong>scalable cross-platform mobile applications</strong> using
              Flutter and Dart. I specialize in <strong>Clean Architecture</strong>,{' '}
              <strong>SOLID principles</strong>, modern state management (Riverpod and
              BLoC), Firebase, REST APIs, and responsive UI.
            </p>

            <p className="about-paragraph">
              My core engineering focus is crafting scalable, maintainable, and
              high-performance mobile applications. I enjoy taking ideas, business
              requirements, and user journeys and transforming them into polished,
              production-ready mobile products.
            </p>

            <div className="about-pillars">
              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <LayersIcon size={20} />
                </div>
                <div className="pillar-content">
                  <h4>Clean Architecture & SOLID</h4>
                  <p>
                    Strict separation of concerns across Domain, Data, and
                    Presentation layers, resulting in testable and decoupled codebases.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <SmartphoneIcon size={20} />
                </div>
                <div className="pillar-content">
                  <h4>Predictable State Management</h4>
                  <p>
                    Production experience with Riverpod and BLoC/Cubit to manage
                    complex, reactive app lifecycles and offline-first workflows.
                  </p>
                </div>
              </div>

              <div className="pillar-item">
                <div className="pillar-icon-box">
                  <CloudIcon size={20} />
                </div>
                <div className="pillar-content">
                  <h4>Cloud Integrations & Offline Storage</h4>
                  <p>
                    Seamless integration with Firebase services (Auth OTP, Firestore,
                    FCM) and lightning-fast local persistence with Hive and SharedPreferences.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Sidebar Cards */}
          <aside data-reveal data-reveal-delay="150" className="about-sidebar reveal-fade-up">
            <div className="info-box">
              <h3 className="info-box-title">Languages</h3>
              <div className="language-list">
                {siteConfig.languages.map((lang) => (
                  <div key={lang.language} className="language-item">
                    <span className="language-name">{lang.language}</span>
                    <span className="language-level">{lang.level}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="info-box">
              <h3 className="info-box-title">Quick Facts</h3>
              <div className="language-list">
                <div className="language-item">
                  <span className="language-name">Specialization</span>
                  <span className="language-level">Flutter & Dart</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Architecture</span>
                  <span className="language-level">Clean Architecture</span>
                </div>
                <div className="language-item">
                  <span className="language-name">State Management</span>
                  <span className="language-level">Riverpod & BLoC</span>
                </div>
                <div className="language-item">
                  <span className="language-name">Availability</span>
                  <span className="language-level">Open to Opportunities</span>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
};
