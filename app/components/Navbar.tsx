// components/Navbar.tsx
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPaymentDropdownOpen, setIsPaymentDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLDivElement>(null);


  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 992);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node) &&
        buttonRef.current && !buttonRef.current.contains(e.target as Node)) {
        setIsPaymentDropdownOpen(false);
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  const currencies = [
    { code: 'INR', symbol: '₹', name: 'Indian Rupee', url: 'https://rzp.io/rzp/jobspayment' },
    { code: 'USD', symbol: '$', name: 'US Dollar', url: 'https://rzp.io/rzp/jobspaymentsusd' },
    { code: 'EUR', symbol: '€', name: 'Euro', url: 'https://rzp.io/rzp/jobspaymenteur' }
  ];

  const servicesMenu = [
    { label: 'Cloud Email Solutions', href: '/cloudemailsolutions' },
    { label: 'Digitizing', href: '/digitizing' },
    { label: 'Graphic Design', href: '/graphicdesign' },
    { label: 'Image Editing', href: '/imageediting' },
    { label: 'Creative', href: '/creative' },
    { label: 'Technology', href: '/technology' },
    { label: 'Art & Order Management', href: '/artandordermanagement' },
    { label: 'Design & Data Services', href: '/designanddataservices' },
    { label: 'Digital Marketing', href: '/digitalmarketing' },
    { label: 'Animation', href: '/animation' }
  ];

  const solutionsMenu = [
    { label: 'Promo Virtuals', href: '/promovirtuals' },
    { label: 'Technology Solutions', href: '/technologysolutions' },
    { label: 'ERP & Order Management', href: '/erpandordermanagement' },
    { label: 'Offshore Development Center', href: '/offshoredevelopmentcenter' },
    { label: 'Consulting', href: '/consulting' },
    { label: 'Maintenance & Upgrades', href: '/maintainanceandupgrades' }
  ];

  const handleCurrencyClick = (url: string) => {
    window.open(url, '_blank');
    setIsPaymentDropdownOpen(false);
  };

  const toggleSubmenu = (menu: string) => {
    setOpenSubmenu(openSubmenu === menu ? null : menu);
  };

  if (isMobile) {
    // Mobile Header
    return (
      <>
        <header style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: '#3d3d3d',
          color: '#fff',
          zIndex: 1000,
          padding: '15px 20px',
          fontFamily: "'Rajdhani', sans-serif"
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center'
          }}>
            <Link href="/">
              <Image
                src="/assets/img/Heading-Logo.png"
                alt="Vector Art Logo"
                width={180}
                height={50}
                style={{ width: '180px', height: 'auto' }}
              />
            </Link>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              style={{
                background: 'none',
                border: 'none',
                color: '#fff',
                cursor: 'pointer',
                padding: '10px',
                display: 'flex',
                flexDirection: 'column',
                gap: '5px'
              }}
            >
              {isMobileMenuOpen ? (
                <X size={28} />
              ) : (
                <>
                  <div style={{ width: '28px', height: '3px', backgroundColor: '#fff', borderRadius: '2px' }}></div>
                  <div style={{ width: '28px', height: '3px', backgroundColor: '#fff', borderRadius: '2px' }}></div>
                  <div style={{ width: '28px', height: '3px', backgroundColor: '#fff', borderRadius: '2px' }}></div>
                </>
              )}
            </button>
          </div>
        </header>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div style={{
            position: 'fixed',
            top: '70px',
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: '#2d2d2d',
            zIndex: 999,
            overflowY: 'auto',
            padding: '20px',
            fontFamily: "'Rajdhani', sans-serif"
          }}>
            <nav style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
              <Link href="/" style={mobileNavLinkStyle}>Home</Link>
              <Link href="/exampleandplans" style={mobileNavLinkStyle}>Example & Plans</Link>
              <Link href="/portfolio" style={mobileNavLinkStyle}>Portfolio</Link>

              {/* Services Mobile */}
              <div>
                <button
                  onClick={() => toggleSubmenu('services')}
                  style={{ ...mobileNavLinkStyle, width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  Services <ChevronDown size={16} style={{ transform: openSubmenu === 'services' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                </button>
                {openSubmenu === 'services' && (
                  <div style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    {servicesMenu.map((item, idx) => (
                      <Link key={idx} href={item.href} style={{ ...mobileNavLinkStyle, fontSize: '14px' }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Mobile */}
              <div>
                <button
                  onClick={() => toggleSubmenu('solutions')}
                  style={{ ...mobileNavLinkStyle, width: '100%', textAlign: 'left', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}
                >
                  Solutions <ChevronDown size={16} style={{ transform: openSubmenu === 'solutions' ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s' }} />
                </button>
                {openSubmenu === 'solutions' && (
                  <div style={{ paddingLeft: '20px', marginTop: '10px' }}>
                    {solutionsMenu.map((item, idx) => (
                      <Link key={idx} href={item.href} style={{ ...mobileNavLinkStyle, fontSize: '14px', }}>
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <a href="https://rzp.io/rzp/jobspayment" target="_blank" rel="noopener noreferrer" style={{ ...mobileNavLinkStyle, backgroundColor: '#E82E31', padding: '12px 20px', textAlign: 'center', marginTop: '20px', borderRadius: '4px' }}>
                Pay Now
              </a>
            </nav>
          </div>
        )}

        <div style={{ height: '70px' }} />
      </>
    );
  }

  // Desktop Header
  return (
    <>
      <header style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        backgroundColor: '#3d3d3dff',
        color: '#fff',
        zIndex: 1000,
        boxShadow: isScrolled ? '0 2px 10px rgba(0,0,0,0.3)' : 'none',
        transition: 'box-shadow 0.3s ease',
        fontFamily: "'Rajdhani', sans-serif"
      }}>
        <div style={{
          maxWidth: '100%',
          margin: '0 auto',
          padding: '0 40px'
        }}>
          <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            height: '100px'
          }}
            onMouseLeave={() => setOpenSubmenu(null)}
          >
            {/* Logo */}
            <div>
              <Link href="/">
                <Image
                  src="/assets/img/Heading-Logo.png"
                  alt="Vector Art Logo"
                  width={260}
                  height={70}
                  style={{ width: '260px', height: 'auto' }}
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '30px' }}>
              <Link href="/" style={{
                ...navButtonStyle,
                backgroundColor: 'transparent',


              }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                Home
              </Link>

              <Link href="/exampleandplans" style={{
                ...navButtonStyle,
                backgroundColor: 'transparent'
              }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                Example & Plans
              </Link>

              <Link href="/portfolio" style={{
                ...navButtonStyle,
                backgroundColor: 'transparent'
              }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#555'}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}>
                Portfolio
              </Link>

              {/* Services Dropdown */}
              <div style={{ position: 'relative' }}>
                {/* onMouseEnter={() => setOpenSubmenu('services')}
                onMouseLeave={() => setOpenSubmenu(null)}> */}
                <button
                  onMouseEnter={() => setOpenSubmenu('services')} // opens menu
                  style={{
                    ...navButtonStyle,
                    backgroundColor: openSubmenu === 'services' ? '#555' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                  onMouseLeave={(e) => {
                    if (openSubmenu !== 'services') e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'} // hover color
                >
                  Services <ChevronDown size={14} />
                </button>

                {openSubmenu === 'services' && (
                  <div style={dropdownMenuStyle}>
                    {servicesMenu.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        style={dropdownItemStyle}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#E82E31';
                          e.currentTarget.style.paddingLeft = '30px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#888888';
                          e.currentTarget.style.paddingLeft = '20px';
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Solutions Dropdown */}
              <div style={{ position: 'relative' }} >
{/* 
                // onMouseEnter={() => setOpenSubmenu('solutions')}
                // onMouseLeave={() => setOpenSubmenu(null)}> */}
                <button
                  onMouseEnter={() => setOpenSubmenu('solutions')} // opens menu
                  style={{
                    ...navButtonStyle,
                    backgroundColor: openSubmenu === 'solutions' ? '#555' : 'transparent',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '5px'
                  }}
                  onMouseLeave={(e) => {
                    if (openSubmenu !== 'solutions') e.currentTarget.style.backgroundColor = 'transparent';
                  }}
                  onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#555'} // hover color
                >
                  Solutions <ChevronDown size={14} />
                </button>

                {openSubmenu === 'solutions' && (
                  <div style={dropdownMenuStyle}>
                    {solutionsMenu.map((item, idx) => (
                      <Link
                        key={idx}
                        href={item.href}
                        style={dropdownItemStyle}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.color = '#E82E31';
                          e.currentTarget.style.paddingLeft = '30px';
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.color = '#888888';
                          e.currentTarget.style.paddingLeft = '20px';
                        }}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Payment Button */}
              <div style={{ position: 'relative', marginLeft: '10px' }}>
                <div ref={buttonRef} style={paymentContainerStyle}>
                  <button
                    onClick={() => setIsPaymentDropdownOpen(!isPaymentDropdownOpen)}
                    className="PaymentButton-Button PaymentButton-Button--rzpTheme"
                    style={paymentButtonStyle}
                  >
                    <svg width="18" height="20" viewBox="0 0 18 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7.077 6.476l-.988 3.569 5.65-3.589-3.695 13.54 3.752.004 5.457-20L7.077 6.476z" fill="#fff"></path>
                      <path d="M1.455 14.308L0 20h7.202L10.149 8.42l-8.694 5.887z" fill="#fff"></path>
                    </svg>
                    <div className="PaymentButton-center">
                      <div className="PaymentButton-contents">
                        <span className="PaymentButton-text">Pay Now</span>
                        <div className="PoweredBy">Secured by Razorpay</div>
                      </div>
                      <svg id="dropdown-chevron" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M6 9l6 6 6-6" />
                      </svg>

                    </div>
                  </button>
                </div>

                {/* Currency Dropdown */}
                {isPaymentDropdownOpen && (
                  <div ref={dropdownRef} style={currencyDropdownStyle}>
                    {currencies.map((currency, idx) => (
                      <React.Fragment key={currency.code}>
                        <div
                          onClick={() => handleCurrencyClick(currency.url)}
                          style={currencyItemStyle}
                          onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#f5f5f5'}
                          onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                        >
                          <span style={{ fontSize: '18px', marginRight: '10px' }}>
                            {currency.symbol}
                          </span>
                          <div style={{ fontFamily: "'Rajdhani', sans-serif" }}>
                            <div style={{ fontWeight: 500 }}>Pay in {currency.code}</div>
                            <div style={{ fontSize: '12px', color: '#555', fontWeight: 400 }}>{currency.name}</div>
                          </div>
                        </div>
                        {idx < currencies.length - 1 && (
                          <hr style={{ margin: '0 10px', border: 'none', borderTop: '1px solid #eee' }} />
                        )}
                      </React.Fragment>
                    ))}
                  </div>
                )}
              </div>
            </nav>
          </div>
        </div >
      </header >

      {/* Spacer for fixed header */}
      < div style={{ height: '100px' }} />
    </>
  );
};

const navButtonStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '15px',
  fontWeight: 400,
  padding: '5px 10px',
  border: '1px solid #000',
  cursor: 'pointer',
  transition: 'background-color 0.3s',
  fontFamily: "'Rajdhani', sans-serif",
  borderRadius: '2px'
};

const dropdownMenuStyle: React.CSSProperties = {
  position: 'absolute',
  top: '100%',
  left: 0,
  backgroundColor: '#ffffff',
  minWidth: '250px',
  padding: '5px 0',
  marginTop: '30px',
  borderRadius: '0',
  boxShadow: 'none',
  display: 'flex',
  flexDirection: 'column',
  border: 'none',
  zIndex: 1000
};

const dropdownItemStyle: React.CSSProperties = {
  color: '#888888',
  textDecoration: 'none',
  padding: '10px 20px',
  fontSize: '14px',
  display: 'block',
  fontFamily: "'Rajdhani', sans-serif",
  fontWeight: 400,
  transition: 'all 0.3s ease',
  cursor: 'pointer'
};

const paymentContainerStyle: React.CSSProperties = {
  boxShadow: '0 0 20px rgba(0,0,0,.08)',
  display: 'inline-block',
  height: '40px',
  transform: 'scale(1.1)',
  transition: 'transform 0.3s',
  position: 'relative',
  borderRadius: '3px'
};

const paymentButtonStyle: React.CSSProperties = {
  cursor: 'pointer',
  border: '1px solid transparent',
  borderRadius: '3px',
  display: 'inline-flex',
  background: '#072654',
  borderColor: '#072654',
  color: '#fff',
  fontFamily: "'Rajdhani', sans-serif",
  fontStyle: 'normal',
  height: '40px',
  minWidth: '150px',
  overflow: 'hidden',
  position: 'relative',
  textAlign: 'center',
  gap: '8px',
  alignItems: 'center',
  padding: 0
};

const currencyDropdownStyle: React.CSSProperties = {
  position: 'absolute',
  top: '45px',
  right: 0,
  backgroundColor: 'white',
  border: '1px solid #ccc',
  width: '200px',
  zIndex: 999999,
  borderRadius: '4px',
  boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
  overflow: 'hidden'
};

const currencyItemStyle: React.CSSProperties = {
  padding: '12px 14px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  gap: '10px',
  transition: 'all 0.3s ease',
  transform: 'translateX(0)',
  color: '#000'
};

const mobileNavLinkStyle: React.CSSProperties = {
  color: '#fff',
  textDecoration: 'none',
  fontSize: '16px',
  padding: '15px 0',
  display: 'block',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: "'Rajdhani', sans-serif",
  fontWeight: 400,
  textAlign: 'left',
  width: '100%'
};

export default Navbar;