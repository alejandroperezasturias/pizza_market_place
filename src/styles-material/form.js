import React, { useState } from 'react';
import TextField from '@material-ui/core/TextField';
import SendMessage from './bottomSendMessage';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
	root: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1.2),
		},
	},
}));

export default function Form() {
	const classes = useStyles();
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [text, setText] = useState('');

	function handleSubmit(event) {
		event.preventDefault();
		console.log('Email:', email, 'Name: ', name, 'Text ', text);
		setEmail('')
		setName('')
		setText('')
	}

	return (
		<form className={classes.root} autoComplete="on" onSubmit={handleSubmit}>
			<div className="form-wrapper">
				<TextField
					fullWidth
					required
					id="standard-required"
					label="Name"
					value={name}
					onInput={(e) => setName(e.target.value)}
				/>
				<TextField
					fullWidth
					required
					id="standard-disabled"
					label="Email"
					type="email"
					value={email}
					onInput={(e) => setEmail(e.target.value)}
				/>
				<TextField
					fullWidth
					required
					id="standard-password-input"
					label="Message"
					value={text}
					onInput={(e) => setText(e.target.value)}
					multiline
				/>
				<SendMessage />
			</div>
		</form>
	);
}
