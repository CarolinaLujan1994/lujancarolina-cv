import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { AppModule } from "./module.module";


@Component({
    selector: 'app-root',
    imports: [CommonModule, AppModule],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})

export class AppComponent implements OnInit {
    title = 'Luján, Carolina';
    public persona: any;
    public informacionGral: any;
    public index: any;
    public contacto: any;


    ngOnInit() {
        this.datosSobreMi();
        this.informacionGeneral();
        this.informacionContacto();
        console.log(this.persona);
        console.log(this.informacionGral);
        console.log(this.informacionContacto);
    }

    datosSobreMi() {
        this.persona = {
            nombre: 'Luján, Carolina Anahí',
            descripcion: 'Estudiante de la Tecnicatura en Programación de Videojuegos',
            foto: 'src/assets/fotocv.jpg',
        };
    }

    informacionContacto() {
        this.contacto = {
            mail: 'lujancarolina1994@gmail.com',
            telefono: '+54 9 11 3371-9211',
            web: 'linkedin.com/in/lujancarolina1994',
            ubicacion: 'Pablo Podestá, Tres de Febrero, Buenos Aires, Argentina'
        };
    }

    informacionGeneral() {
        this.informacionGral = [
            {
                id: 1,
                titulo: 'Sobre Mí',
                descripcion: 'Soy una persona proactiva, organizada y responsable, con buenas relaciones interpersonales, comprometida con el trabajo ante diferentes situaciones y me adapto rápido a los cambios. Siempre tengo la mejor disposición para la realización de mis tareas y es por eso que busco un puesto que me permita continuar aprendiendo así también como crecer profesionalmente. Mi paso por el Hospital de Clínicas me dio los conocimientos y el empuje para impulsarme a nuevos objetivos, siendo parte del equipo de desarrollo del actual portal web.'
            },
            {
                id: 2,
                titulo: 'Experiencia laboral',
                descripcion: {
                    id: 1,
                    puesto: '...',
                    fecha: '00',
                    tareas: '...'
                }
            },
            {
                id: 3,
                titulo: 'Otra experiencia Laboral',
                descripcion: [{
                    id: 1,
                    puesto: '...',
                    fecha: '00',
                    tareas: '...'
                },
                {
                    id: 2,
                    puesto: '...',
                    fecha: '00',
                    tareas: '...'
                },
                {
                    id: 3,
                    puesto: '...',
                    fecha: '00',
                    tareas: '...'
                },
                {
                    id: 4,
                    puesto: '...',
                    fecha: '00',
                    tareas: '...'
                }
                ]
            },
            {
                id: 4,
                titulo: 'Académica',
                descripcion: {
                    id: 1,
                    puesto: '...',
                    fecha: '...',
                    tareas: '...'
                }
            },
            {
                id: 5,
                titulo: 'Conocimientos',
                descripcion: {
                    id: 1,
                    puesto: '...',
                    fecha: '...',
                    tareas: '...'
                }
            },
            {
                id: 6,
                titulo: 'Cursos realizados',
                descripcion: [{
                    id: 1,
                    foto: '...',
                    fecha: '00',
                },
                {
                    id: 2,
                    foto: '...',
                    fecha: '00',
                },
                {
                    id: 3,
                    foto: '...',
                    fecha: '00',
                },
                {
                    id: 4,
                    foto: '...',
                    fecha: '00',
                },
                {
                    id: 5,
                    foto: '...',
                    fecha: '00',
                }]
            },
            {
                id: 7,
                titulo: 'Información extra',
                descripcion: {
                    id: 1,
                    puesto: '...',
                    fecha: '...',
                    tareas: '...'
                }
            }
        ];
    }

    /*     mostrarInformacion(index: number) {
          const infoContainer = document.getElementById('info-container');
       
          if (infoContainer) {
            infoContainer.innerHTML = `<p>${this.informacionGral[index].descripcion}</p>`;
          } else {
            console.error('El contenedor de información no se encontró.');
          }
        }
       
        functionAuxiliar() {
          document.addEventListener('DOMContentLoaded', () => {
            const btn1 = document.getElementById('btn1');
            const btn2 = document.getElementById('btn2');
            const btn3 = document.getElementById('btn3');
            const btn4 = document.getElementById('btn4');
            const btn5 = document.getElementById('btn5');
            const btn6 = document.getElementById('btn6');
            const btn7 = document.getElementById('btn7');
       
            if (btn1 && btn2 && btn3 && btn4 && btn5 && btn6 && btn7) {
              btn1.addEventListener('click', () => this.mostrarInformacion(1));
              btn2.addEventListener('click', () => this.mostrarInformacion(2));
              btn3.addEventListener('click', () => this.mostrarInformacion(3));
              btn4.addEventListener('click', () => this.mostrarInformacion(4));
              btn5.addEventListener('click', () => this.mostrarInformacion(5));
              btn6.addEventListener('click', () => this.mostrarInformacion(6));
              btn7.addEventListener('click', () => this.mostrarInformacion(7));
            } else {
              console.error('No se encontraron los botones.');
            }
          });
        } */
    constructor() {
        document.addEventListener('DOMContentLoaded', () => this.functionAuxiliar());
    }

    mostrarInformacion(index: number): void {
        const infoContainer = document.getElementById('info-container');

        if (infoContainer) {
            infoContainer.innerHTML = `<p>${this.informacionGral[index].descripcion}</p>`;
        } else {
            console.error('El contenedor de información no se encontró.');
        }
    }

    functionAuxiliar(): void {
        const btn1 = document.getElementById('btn1');
        const btn2 = document.getElementById('btn2');
        const btn3 = document.getElementById('btn3');
        const btn4 = document.getElementById('btn4');
        const btn5 = document.getElementById('btn5');
        const btn6 = document.getElementById('btn6');
        const btn7 = document.getElementById('btn7');

        if (btn1 && btn2 && btn3 && btn4 && btn5 && btn6 && btn7) {
            btn1.addEventListener('click', () => this.mostrarInformacion(1));
            btn2.addEventListener('click', () => this.mostrarInformacion(2));
            btn3.addEventListener('click', () => this.mostrarInformacion(3));
            btn4.addEventListener('click', () => this.mostrarInformacion(4));
            btn5.addEventListener('click', () => this.mostrarInformacion(5));
            btn6.addEventListener('click', () => this.mostrarInformacion(6));
            btn7.addEventListener('click', () => this.mostrarInformacion(7));
        } else {
            console.error('No se encontraron los botones.');
        }
    }
}

