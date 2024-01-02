const Button = ({ title, hasIcon }) => {
    return (
        <button className="flex items-center text-white bg-primary p-2 rounded-md px-5 hover:bg-red-800 transition-all duration-200 group">
            <span className={hasIcon ? 'mr-4' : ''}>{title}</span>
            {
                hasIcon ?
                    <svg width="22" height="14" viewBox="0 0 28 17" fill="none" xmlns="http://www.w3.org/2000/svg" className="group">
                        <path d="M2 8.5H26M26 8.5L19.1429 15M26 8.5L19.1429 2" stroke="white" stroke-width="2.60582" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                    : <></>
            }
        </button>
    )
}

export default Button