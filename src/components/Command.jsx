import './Command.css'
function Command({ prompt, text }) {

  return (

    <div className='flex w-full'>
      <pre className='history'><span className='prompt mr-[0.5em]'>{prompt}</span>
        {text}</pre>
    </div>


  )
}


export default Command;
