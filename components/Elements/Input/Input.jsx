import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Fragment, useState } from 'react';
import InputMask from 'react-input-mask';
import classes from './Input.module.css';

const Input = (props) => {
    // const [isVisible, setIsVisible] = useState(false);
    const [inputType, setInputType] = useState(props.type);

    // const onVisibleHandler = () => {
    //     setIsVisible(true);
    // };

    // const onInvisibleHandler = () => {
    //     setIsVisible(false);
    // };

    const changeTypeHandler = () => {
        inputType === 'text' ? setInputType('password') : setInputType('text');
    }

    return(
        <Fragment>
            {props.type === 'text' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <input 
                        id={props.id} 
                        type={props.type}
                        placeholder={props.placeholder} 
                        className={`${classes.input} ${props.isEmpty ? classes.invalid : ''}`}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                    />
                    {props.isEmpty && 
                        <div className={classes.advise}>
                            Campo {props.label.toLowerCase()} é requerido.
                        </div>
                    }
                </div>
            }
            {props.type === 'complemento' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <input 
                        id={props.id} 
                        type="text"
                        placeholder={props.placeholder} 
                        className={classes.input}
                        value={props.value}
                        onChange={props.onChange}
                    />
                </div>
            }
            {props.type === 'number' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <input 
                        id={props.id} 
                        type={props.type}
                        value={props.value}
                        placeholder={props.placeholder} 
                        className={`${classes.input} ${props.isEmpty ? classes.invalid : ''}`}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                        min="0"
                    />
                    {props.isEmpty && 
                        <div className={classes.advise}>
                            Campo {props.label.toLowerCase()} é requerido.
                        </div>
                    }
                </div>
            }
            {props.type === 'email' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <input 
                        id={props.id} 
                        type={props.type}
                        placeholder={props.placeholder}
                        value={props.value}
                        className={`${classes.input} ${props.isEmpty ? classes.invalid : ''}`}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                    />
                    {props.isEmpty && 
                        <div className={classes.advise}>
                            Campo {props.label.toLowerCase()} é requerido.
                        </div>
                    }
                </div>
            }
            {props.type === 'cpf' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <InputMask
                        id={props.id} 
                        inputMode="numeric"
                        placeholder={props.placeholder}
                        value={props.value}
                        className={`${classes.input} ${props.isEmpty ? classes.invalid : ''}`}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                        mask={'999.999.999-99'}
                    />
                    {props.isEmpty && 
                        <div className={classes.advise}>
                            Campo {props.label.toLowerCase()} é requerido.
                        </div>
                    }
                </div>
            }
            {props.type === 'password' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <input 
                        id={props.id} 
                        type={inputType}
                        placeholder={props.placeholder} 
                        className={`${classes.input} ${props.isEmpty ? classes.invalid : ''}`}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                    />
                    {inputType === 'text'
                        ? <FontAwesomeIcon icon={faEyeSlash} onClick={changeTypeHandler} className={classes.icon} />
                        : <FontAwesomeIcon icon={faEye} onClick={changeTypeHandler} className={classes.icon} />    
                    }
                    {props.isEmpty && 
                        <div className={classes.advise}>
                            Campo {props.label.toLowerCase()} é requerido.
                        </div>
                    }
                </div>
            }
            {props.type === 'date' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <InputMask 
                        id={props.id} 
                        inputMode="numeric"
                        className={`${classes.input} ${props.isEmpty ? classes.invalid : ''}`}
                        value={props.value}
                        placeholder={props.placeholder}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                        mask={'99/99/9999'}
                    />
                    {props.isEmpty && 
                        <div className={classes.advise}>
                            Campo {props.label.toLowerCase().split(' ')[0]} é requerido.
                        </div>
                    }
                </div>
            }
            {props.type === 'cel' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <InputMask
                        id={props.id}
                        inputMode="numeric"
                        placeholder={props.placeholder} 
                        className={`${classes.input} ${props.isEmpty ? classes.invalid : ''}`}
                        value={props.value}
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                        mask={'(99) 99999-9999'}
                    />
                    {props.isEmpty && 
                        <div className={classes.advise}>
                            Campo {props.label.toLowerCase()} é requerido.
                        </div>
                    }
                </div>
            }
            {props.type === 'genero' &&
                <div className={classes.inputContainerGenero}>
                    <p className={classes.phraseGenero}>Gênero</p>
                    {props.data.map( (item, index) => {
                        return(
                            <label className={classes.labelGenero} key={index}>
                                {item.label === 'Outros' 
                                    ? 
                                        <input 
                                            id={props.id}
                                            name={item.name} 
                                            type="radio" 
                                            value={item.value}
                                            className={classes.inputRadio} 
                                            // onClick={onVisibleHandler}
                                            onChange={props.onChange}
                                            checked={item.value === props.checked ? item.value : ''}
                                        />
                                    : 
                                        <input 
                                            id={props.id}
                                            name={item.name} 
                                            type="radio"
                                            value={item.value}
                                            className={classes.inputRadio} 
                                            // onClick={onInvisibleHandler}
                                            onChange={props.onChange}
                                            checked={item.value === props.checked ? item.value : ''}
                                        />
                                }
                                <span className={classes.radioCustom}></span>
                                {item.label}
                                {/* {item.label === 'Outros' && 
                                    <input 
                                        id={props.id}
                                        type="text" 
                                        name={item.name}
                                        defaultValue={item.value}
                                        placeholder="Gênero (opcional)"
                                        className={`${classes.others} ${isVisible ? '' : classes.hidden}`}
                                        onChange={props.onChange}
                                    />
                                } */}
                            </label>
                        )
                    })}
                </div>
            }
            {props.type === 'select' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <select
                        id={props.id}
                        className={`${classes.input} ${props.isEmpty ? classes.invalid : ''}`}
                        defaultValue={props.value} 
                        onChange={props.onChange}
                        onBlur={props.onBlur}
                        onFocus={props.onFocus}
                    >
                        <option disabled value=''>Selecione um item</option>
                        {props.data.map( (item, index) => {
                            return(
                                <option value={item.value} key={index}>
                                    {item.label}
                                </option>
                            )
                        })}
                    </select>
                    {props.isEmpty && 
                        <div className={classes.advise}>
                            Campo {props.label.toLowerCase()} é requerido.
                        </div>
                    }
                </div>
            }
            {props.type === 'state_city_country' &&
                <div className={classes.inputContainer}>
                    <label htmlFor={props.id} className={classes.label}>{props.label}</label>
                    <input 
                        id={props.id} 
                        type={props.type}
                        value={props.value}
                        readOnly
                        disabled
                        className={`${classes.input} ${classes.scc}`}
                    />
                </div>
            }
        </Fragment>
    )
}

export default Input;