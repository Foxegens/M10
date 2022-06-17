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
              {props.data ? props.data.button1 : 'Loading'}
              </a>
            </li>
            <li>
              <a href='#services' className='page-scroll'>
              {props.data ? props.data.button2 : 'Loading'}
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
              {props.data ? props.data.button3 : 'Loading'}
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
              {props.data ? props.data.button4 : 'Loading'}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
