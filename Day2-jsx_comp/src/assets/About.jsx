let About = ({width,children})=>{
console.log(width);
console.log(children);

    return (
        <nav>
         <h1>Hey i am about</h1>
         {children}
        </nav>
         );
};

export default About;
