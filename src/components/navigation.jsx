export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>

          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          <a href='#page-top'>
          <img width="60px" src="img/main-logo.png" alt='logo' />
          </a>{' '}
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
            <li>
              <a href='#about' className='page-scroll'>
                О нас
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
                Наши услуги
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Наши услуги 2
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Контакты
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
