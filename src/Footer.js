function Footer (props) {
    return(
        <div className="footer">
            <h3>{props ? `My name is ${props.name} and today I 'm Learning about React` : `Today I'm learning about react`}</h3>
        </div>
    )
}

export default Footer;