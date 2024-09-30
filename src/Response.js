export const help = `\n
****************************************************************************\n\
*  Terminal | Ragnar Vallhala                                              *\n\
****************************************************************************\n\n\
Use the commands below and enjoy the experience of terminal in web.\n\
    cat[file]           Print file content\n\
    cd[directory]       Change directory\n\
    cls | clear         Clear screen\n\
    date                Print current date and time\n\
    echo[text]          Print text to terminal\n\
    help                List all the commands\n\
    ls                  List all the files and directories\n\
    pwd                 Print Working Directory\n\
    reboot              Restart the terminal\n\
    ./[executable]      Run Executable`;

export const invalid = "Command not found\nTry help";

export const dir = {
  '~': ['about/', 'contacts/', 'projects/'],
  '~/about': ['mailMe*', 'me.txt'],
  '~/contacts': ['github.ln', 'instagram.ln', 'linkedin.ln', 'mail.ln'],
  '~/projects': [
    'Chip8Emulator/',
    'Moleculizer/',
    'Scripter/',
    'Engine/',
    'SortingVisualizer/',
    'SDSWebsite/',
    'CodingClubWebsite/'
  ],
  '~/projects/Chip8Emulator': ['github.ln', 'about.txt'],
  '~/projects/Moleculizer': ['github.ln', 'about.txt'],
  '~/projects/Scripter': ['github.ln', 'about.txt'],
  '~/projects/Engine': ['github.ln', 'about.txt'],
  '~/projects/SortingVisualizer': ['github.ln', 'about.txt'],
  '~/projects/SDSWebsite': ['github.ln', 'about.txt'],
  '~/projects/CodingClubWebsite': ['github.ln', 'about.txt'],
}

export const files = {
  '~/about/me.txt': "I am Ashutosh Vishwakarma, a passionate software developer currently pursuing a Bachelor's degree in Computer Science & Engineering at the Indian Institute of Technology Jammu. With a robust foundation in web development, IoT, and embedded systems, I specialize in languages such as Python, JavaScript, C, C++, and Java. My experience encompasses both hands-on projects and internships, where I've actively contributed to transforming STEM education and developing innovative solutions. I thrive in Unix/Linux environments and am dedicated to continuous learning, problem-solving, and leveraging technology to create impactful applications.",
  '~/about/mailMe': 'mailto:ashutoshvishwakarma208@gmail.com',
  '~/contacts/github.ln': 'https://github.com/ragnar-vallhala',
  '~/contacts/instagram.ln': 'https://www.instagram.com/7__v.ashu__7/profilecard/?igsh=MWFjcTQzYXZocXFhMQ==',
  '~/contacts/linkedin.ln': 'https://www.linkedin.com/in/ashutosh-vishwakarma-083305257/',
  '~/contacts/mail.ln': 'mailto:ashutoshvishwakarma208@gmail.com',
  '~/projects/Chip8Emulator/github.ln': 'https://github.com/ragnar-vallhala/Chip8_Emulator',
  '~/projects/Chip8Emulator/about.txt': `The CHIP-8 Emulator project is designed to learn and practice the basics of emulation, working with machine code in a fun and engaging way. Built using C++ and SDL, the project handles system operations, windowing, input management, and will eventually support sound. SDL serves as the backbone for interfacing with system-level features.

The project is developed using Visual Studio Community 2022. Users can clone the repository, open the solution file, and build the project in either Debug or Release configuration. After building, the emulator runs by loading ROMs, which are included in the repository's ROM directory. Users can run a ROM by dragging it onto the executable or specifying the ROM path via the command line.

The emulator includes key mappings that mirror the original CHIP-8 keypad for intuitive gameplay. Keypad-to-keyboard mapping is also provided for ease of use. References for the project include CHIP-8 Wikipedia entries and other emulation resources, with contributions from the development community.
`,

  '~/projects/Scripter/github.ln': 'https://github.com/ragnar-vallhala/Scripter',
  '~/projects/Scripter/about.txt': `This project enables users to upload code directly to Arduino and similar boards through a web interface. Built using the MERN stack, the website offers a coding experience similar to Visual Studio Code, allowing users to write and edit code seamlessly. The standout feature of this system is a C++ executable that runs locally on the user's machine. This executable communicates with the web platform via WebSocket, managing the upload process and interfacing with connected hardware. This approach simplifies the workflow for programming boards, making it more accessible and efficient through a browser-based interface.`,

  '~/projects/Engine/github.ln': 'https://github.com/ragnar-vallhala/Engine',
  '~/projects/Engine/about.txt': `This C++ project, developed using Visual Studio, focuses on graphics programming and is built with OpenGL and GLFW. The project is hosted on GitHub with three branches, each covering different aspects of graphics rendering. The master branch features basic rendering functionality, including the ability to add cubes, apply textures, and handle camera movement. The lighting branch delves into lighting effects, showcasing code to simulate realistic light interactions. Finally, the model branch handles loading and rendering complex 3D models, offering a more advanced level of rendering techniques. This project provides a comprehensive foundation for anyone interested in 3D graphics development.`,

  '~/projects/SortingVisualizer/github.ln': 'https://github.com/ragnar-vallhala/SortingVisualizer',
  '~/projects/SortingVisualizer/about.txt': `The Sorting Visualizer project is an engaging tool developed using Python and Tkinter that aims to provide a visual representation of various sorting algorithms. This application allows users to interactively explore sorting techniques by enabling them to randomize an array of numbers, set the desired size of the array, and select from a range of sorting algorithms.

Once the parameters are set, users can initiate the sorting process by clicking the "Start" button, after which the application visually animates the movement of the bar graphs representing the array elements. This dynamic visualization helps users better understand how different sorting algorithms work, including their performance and efficiency.

By making complex algorithms accessible and visually appealing, the Sorting Visualizer serves as an excellent educational tool for anyone looking to deepen their understanding of sorting mechanisms and algorithmic thinking.`,


  '~/projects/SDSWebsite/github.ln': 'https://github.com/ragnar-vallhala/SDSWebsite',
  '~/projects/SDSWebsite/about.txt': `I developed a dynamic and interactive website for SDS LLC using the MERN stack, which includes MongoDB, Express.js, React.js, and Node.js. The project aimed to create a user-friendly platform that effectively showcases SDS LLC’s services and products while maintaining a strong corporate identity. The website features a fully responsive design, ensuring optimal viewing experiences across various devices. With MongoDB as the database, content management is streamlined, allowing for easy updates to keep the information current. The frontend, built with React.js, offers a smooth and interactive user interface, enhancing user engagement through dynamic components. On the backend, Node.js and Express.js power RESTful APIs that facilitate seamless communication between the client and server, ensuring efficient data retrieval and submission. This project not only demonstrates the capabilities of the MERN stack but also highlights the significance of a robust web presence for businesses in today’s digital landscape.`,

  '~/projects/CodingClubWebsite/github.ln': 'https://github.com/ragnar-vallhala/CodingClub',
  '~/projects/CodingClubWebsite/about.txt': `I created a dedicated website for the Coding Club at IIT Jammu to support their hackathon event, "Fill The Void." The site serves as an informative and interactive platform for participants, providing essential details about the hackathon, including registration processes, event schedules, and guidelines. Built with modern web technologies, the website features an intuitive user interface that enhances navigation and user experience. It includes sections for team registration, project submissions, and real-time updates about the event. Additionally, the site highlights sponsors and offers resources to help participants succeed in their projects. This project not only promotes the hackathon but also fosters a vibrant coding community within IIT Jammu, encouraging collaboration and innovation among students.`,


  '~/projects/Moleculizer/github.ln': 'https://github.com/ragnar-vallhala/Moleculizer',
  '~/projects/Moleculizer/about.txt': `Moleculizer is a powerful tool designed for visualizing molecular structures by opening .xyz files and presenting them in an interactive 3D environment. Users can easily manipulate the model by translating, rotating, and scaling it, allowing for a comprehensive examination of molecular geometry. One of the standout features of Moleculizer is its ability to retain the application's state between sessions, ensuring that users can resume their work seamlessly. Developed in C++ with a focus on object-oriented programming, Moleculizer leverages several essential libraries for its functionality. Key dependencies include OpenGL for graphics rendering, GLFW for window and input management, ImGui for user interface creation, and GLM for advanced mathematical calculations related to graphics. The project is configured with CMake for easy building; users can compile it by running cmake -S . -B build followed by cmake --build build -j, where the -j flag enables parallel building to optimize performance. The application is compatible with both MSBuild in Visual Studio 17 2022 and GNU with Unix Makefiles, allowing for flexible build configurations. Moleculizer offers a user-friendly interface, enabling users to open new molecular files through the file menu, making it an essential tool for researchers and students in the field of chemistry and molecular science.`,

}
