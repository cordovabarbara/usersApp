
import { useForm } from 'react-hook-form'
import defaultValues from '../utilis/defaultValues'
import { useEffect } from 'react'
import "./styles/formUsers.css"
import swal from 'sweetalert'


const FormUser = ({ createNewUser, updateInfo, updateUserById, setUpdateInfo, setFormClose, formClose }) => {

    const { register, handleSubmit, reset} = useForm()
    


    useEffect(() => {
      reset(updateInfo)
    }, [updateInfo])
    

    const submit = data => {

      if(updateInfo){
        updateUserById(updateInfo.id, data)
        setUpdateInfo()
        
      }else {
        createNewUser(data)
        reset(defaultValues)
        swal({
          title:"User Created Successfully",
          icon:"success",
          button: "Aceptar",
        });
        }
      }

    const handleExit = () => {
      setFormClose(true)
    }

    
  return (
    <div className={`form__container ${formClose && 'close'}`}>
    <form className='form' onSubmit={handleSubmit(submit)}>
    <span onClick={handleExit} className='form__exit'>X</span>
    <h3 className='form__title'>{updateInfo ? 'Update User Information' : 'Create New User'}</h3>
    <div className='form__item'>
        <label className='form__label'htmlFor="email">Email: </label>
        <input {...register('email')} type="email" required id="email" />
    </div>

    <div className='form__item'>
        <label className='form__label'htmlFor="password">Password</label>
        <input className='form__input' {...register('password')} type="password" required id="password" />
      </div>
      <div className='form__item'>
        <label className='form__label'htmlFor="first_name">First Name</label>
        <input className='form__input' {...register('first_name')} type="text" required id="first_name" />
      </div>
      <div className='form__item'>
        <label className='form__label'htmlFor="last_name">Last Name</label>
        <input className='form__input' {...register('last_name')} type="text" required id="last_name" />
      </div>
      <div className= 'form__item'>
        <label className='form__label'htmlFor="birthday">Birthday: </label>
        <input className='form__input'  {...register('birthday')} type="date" required id="birthday" />
      </div>
      <button  onClick={handleExit} className='form__btn'>{updateInfo ? 'Update' : 'Create'}</button>
    </form>
    </div>
  )
  }


export default FormUser