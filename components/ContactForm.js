class ContactForm extends React.Component{
	constructor(props){
		super(props);
		this.state ={
			firstName: '',
			lastName: '',
			email: ''
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleChange(event){
		event.preventDefault();
		this.setState({[event.target.name]: event.target.value})
	}

	handleSubmit(event){
		event.preventDefault();
		const firstName = event.target.firstName.value
		const lastName = event.target.lastName.value
		const email = event.target.email.value
		if(firstName.trim() !== '' && lastName.trim() !== '' && email.trim() !=='' ){
			this.props.addContact(firstName, lastName, email)
		}
	}

	render() {
		return (
			React.createElement('form', {onSubmit: this.handleSubmit, className: 'contactForm'},
				React.createElement('input',{
					id: 'firstName',
					type: 'text',
					placeholder: 'Imię',
					value: (this.props.contact.fristName, this.state.firstName.value),
					onChange: this.handleChange
				}),
				React.createElement('input',{
					id: 'lastName',
					type: 'text',
					placeholder: 'Nazwisko',
					value: (this.props.contact.lastName, this.state.lastName.value),
					onChange: this.handleChange
				}),
				React.createElement('input',{
					id: 'email',
					type: 'email',
					placeholder: 'Email',
					value: (this.props.contact.email, this.state.email.value),
					onChange: this.handleChange

				}),
				React.createElement('button', {id: 'btn', type: 'submit'}, "Dodaj kontakt")
			)
		)
	}
}
