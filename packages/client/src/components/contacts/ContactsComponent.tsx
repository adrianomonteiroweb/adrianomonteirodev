import './contactsComponent.css';

export default function ContactsComponent() {
  return (
    <div className='contacts-div'>
      <a href='https://github.com/adrianomonteiroweb' target='blank'>
        <img
          className='github-icon'
          src={
            localStorage.getItem('themePreference') === 'Dark'
              ? 'github-dark.png'
              : 'github-light.png'
          }
          alt='Github'
        />
      </a>
      <a href='https://linkedin.com/in/adrianomonteirodev' target='blank'>
        <img
          className='linkedin-icon'
          src={
            localStorage.getItem('themePreference') === 'Dark'
              ? 'linkedin-dark.png'
              : 'linkedin-light.png'
          }
          alt='LinkedIn'
        />
      </a>
      <a
        href='https://api.whatsapp.com/send?phone=5585989587554&text=Hi%2C%20Adriano...%20'
        target='blank'
      >
        <img
          className='whatsapp-icon'
          src={
            localStorage.getItem('themePreference') === 'Dark'
              ? 'whatsapp-dark.png'
              : 'whatsapp-light.png'
          }
          alt='WhatsApp'
        />
      </a>
      <a href='mailto:adrianomonteirodev@gmail.com' target='blank'>
        <img
          className='gmail-icon'
          src={
            localStorage.getItem('themePreference') === 'Dark'
              ? 'gmail-dark.png'
              : 'gmail-light.png'
          }
          alt='Gmail'
        />
      </a>
    </div>
  );
}
