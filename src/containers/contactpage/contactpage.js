import React from 'react';
import {useForm} from 'react-hook-form';


const ContactPage = () => {

    const {register, handleSubmit, errors} = useForm();

    const onSubmit = (data) => {
        console.log(data)
    }

    return (
        <form onSubmit = {handleSubmit(onSubmit)}>
            <input 
                type="text" 
                placeholder="enter your name" 
                name="name" 
                ref={register({required: "Name Required"})} 
            />
            {errors.name && <p>{errors.name.message}</p>}

            <input 
                type="email" 
                placeholder="enter your email" 
                name="email" 
                ref={register({
                    required: "Email Required", 
                    pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: "Invalid Email address"
                    }
                })}
            />
            {errors.email && <p>{errors.email.message}</p>}


            <input 
                type="password" 
                placeholder="enter your password" 
                name="password" 
                ref={register({required: "Password Required", minLength: { value: 6, message:"Password should be 6 character long"}})} 
            />
            {errors.password && <p>{errors.password.message}</p>}

            <input type="submit" />
        </form>

    )


};

export default ContactPage;