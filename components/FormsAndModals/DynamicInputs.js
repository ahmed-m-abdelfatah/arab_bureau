import { Button, Form } from 'react-bootstrap';
import { v4 as uuidv4 } from 'uuid';

const DynamicInputs = ({ title, placeholder, state, setState }) => {
  const handleAddFields = () => {
    setState([...state, { id: uuidv4(), value: '' }]);
  };

  const handleChangeInput = (id, event) => {
    const newState = state.map(i => {
      if (id === i.id) {
        // i[event.target.name] = event.target.value;
        i.value = event.target.value;
      }
      return i;
    });

    setState(newState);
  };

  const handleRemoveFields = id => {
    const values = [...state];

    values.splice(
      values.findIndex(value => value.id === id),
      1,
    );

    setState(values);
  };

  return (
    <>
      <h3 className='user-select-none'>
        {title}{' '}
        <Button size='sm' variant='success' onClick={handleAddFields}>
          add
        </Button>
      </h3>
      {state.map((input, index) => {
        const num = ++index;
        return (
          <Form.Group key={input.id} className='mb-3 d-flex'>
            <Form.Control
              type='text'
              className='shadow-none'
              placeholder={`${placeholder} ${num < 10 ? `0${num}` : num}`}
              onChange={e => handleChangeInput(input.id, e)}
              autoComplete='off'
              value={input.value || ''}
            />
            <Button size='sm' variant='danger' onClick={() => handleRemoveFields(input.id)}>
              Delete
            </Button>
          </Form.Group>
        );
      })}
    </>
  );
};

export default DynamicInputs;
