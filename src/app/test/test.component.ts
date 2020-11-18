import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {

isTesting = false;
isTest = true;
isForm1 = false;
isForm2 = false;
isForm3 = false;
isForm4 = false;
isForm5 = false;
isForm6 = false;
isForm7 = false;
suma = 0;
respuesta: any = {};
resultado= false;

escalas = {
tristeza: [
    {
      id: 1,
      letra: 'a) No me siento triste.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Me siento triste gran parte del tiempo.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Me siento triste todo el tiempo.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Me siento tan triste o soy tan infeliz que no puedo soportarlo.',
      valor: '3',
    }
    ],

pesimismo: [
    {
      id: 1,
      letra: 'a) No estoy desalentado respecto del mi futuro.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Me siento más desalentado respecto de mi futuro que lo que solía estarlo.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) No espero que las cosas funcionen para mi.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Siento que no hay esperanza para mi futuro y que sólo puede empeorar.',
      valor: '3',
    }
    ],

 fracaso: [
    {
      id: 1,
      letra: 'a) No me siento como un fracasado.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) He fracasado más de lo que hubiera debido.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Cuando miro hacia atrás, veo muchos fracasos.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Siento que como persona soy un fracaso total.',
      valor: '3',
    }
    ],

placer: [
    {
      id: 1,
      letra: 'a) Obtengo tanto placer como siempre por las cosas de las que disfruto.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) No disfruto tanto de las cosas como solía hacerlo.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Obtengo muy poco placer de las cosas que solía disfrutar.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) No puedo obtener ningún placer de las cosas de las que solía disfrutar.',
      valor: '3',
    }
    ],

culpa: [
    {
      id: 1,
      letra: 'a) No me siento particularmente culpable.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Me siento culpable respecto de varias cosas que he hecho o que debería haber hecho.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Me siento bastante culpable la mayor parte del tiempo.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Me siento culpable todo el tiempo.',
      valor: '3',
    }
    ],

castigo: [
    {
      id: 1,
      letra: 'a) No siento que este siendo castigado.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Siento que tal vez pueda ser castigado.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Espero ser castigado.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Siento que estoy siendo castigado.',
      valor: '3',
    }
    ],

disconformidad: [
    {
      id: 1,
      letra: 'a) Siento acerca de mi lo mismo que siempre.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) He perdido la confianza en mí mismo.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Estoy decepcionado conmigo mismo.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) No me gusto a mí mismo.',
      valor: '3',
    }
    ],

autocritica: [
    {
      id: 1,
      letra: 'a) No me critico ni me culpo más de lo habitual.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Estoy más crítico conmigo mismo de lo que solía estarlo.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Me critico a mí mismo por todos mis errores.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Me culpo a mí mismo por todo lo malo que sucede.',
      valor: '3',
    }
    ],

suicida: [
    {
      id: 1,
      letra: 'a) No tengo ningún pensamiento de matarme.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) He tenido pensamientos de matarme, pero no lo haría.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Querría matarme.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Me mataría si tuviera la oportunidad de hacerlo.',
      valor: '3',
    }
    ],

llanto: [
    {
      id: 1,
      letra: 'a) No lloro más de lo que solía hacerlo.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) No lloro más de lo que solía hacerlo.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Lloro por cualquier pequeñez.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Siento ganas de llorar pero no puedo.',
      valor: '3',
    }
    ],

agitacion: [
    {
      id: 1,
      letra: 'a) No estoy más inquieto o tenso que lo habitual.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Me siento más inquieto o tenso que lo habitual.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Estoy tan inquieto o agitado que me es difícil quedarme quieto',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Estoy tan inquieto o agitado que tengo que estar siempre en movimiento o haciendo algo.',
      valor: '3',
    }
    ],

interes: [
    {
      id: 1,
      letra: 'a) No he perdido el interés en otras actividades o personas.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Estoy menos interesado que antes en otras personas o cosas.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) He perdido casi todo el interés en otras personas o cosas.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Me es difícil interesarme por algo.',
      valor: '3',
    }
    ],

indecision: [
    {
      id: 1,
      letra: 'a) Tomo mis propias decisiones tan bien como siempre.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Me resulta más difícil que de costumbre tomar decisiones',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Encuentro mucha más dificultad que antes para tomar decisiones.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Tengo problemas para tomar cualquier decisión.',
      valor: '3',
    }
    ],

desvalorizacion: [
    {
      id: 1,
      letra: 'a) No siento que yo no sea valioso.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) No me considero a mi mismo tan valioso y útil como solía considerarme',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Me siento menos valioso cuando me comparo con otros.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Siento que no valgo nada.',
      valor: '3',
    }
    ],

energia: [
    {
      id: 1,
      letra: 'a) Tengo tanta energía como siempre.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Tengo menos energía que la que solía tener.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) No tengo suficiente energía para hacer demasiado',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) No tengo energía suficiente para hacer nada.',
      valor: '3',
    }
    ],

sueno: [
    {
      id: 1,
      letra: 'a) No he experimentado ningún cambio en mis hábitos de sueño.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Duermo un poco más que lo habitual.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Duermo mucho más que lo habitual.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Duermo la mayor parte del día',
      valor: '3',
    }
    ],

irritabilidad: [
    {
      id: 1,
      letra: 'a) No estoy tan irritable que lo habitual.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Estoy más irritable que lo habitual.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Estoy mucho más irritable que lo habitual.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Estoy irritable todo el tiempo.',
      valor: '3',
    }
    ],

apetito: [
    {
      id: 1,
      letra: 'a) No he experimentado ningún cambio en mi apetito.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Mi apetito es un poco menor que lo habitual.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Mi apetito es mucho menor que antes.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) No tengo apetito en absoluto.',
      valor: '3',
    }
    ],

concentracion: [
    {
      id: 1,
      letra: 'a) Puedo concentrarme tan bien como siempre.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) No puedo concentrarme tan bien como habitualmente',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Me es difícil mantener la mente en algo por mucho tiempo.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Encuentro que no puedo concentrarme en nada.',
      valor: '3',
    }
    ],

cansancio: [
    {
      id: 1,
      letra: 'a) No estoy más cansado o fatigado que lo habitual.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Me fatigo o me canso más fácilmente que lo habitual.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Estoy demasiado fatigado o cansado para hacer muchas de las cosas que solía hacer.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) Estoy demasiado fatigado o cansado para hacer la mayoría de las cosas que solía hacer.',
      valor: '3',
    }
    ],

sexo: [
    {
      id: 1,
      letra: 'a) No he notado ningún cambio reciente en mi interés por el sexo.',
      valor: '0',
    },
    {
      id: 2,
      letra: 'b) Estoy menos interesado en el sexo de lo que solía estarlo.',
      valor: '1',
    },
    {
      id: 3,
      letra: 'c) Estoy mucho menos interesado en el sexo.',
      valor: '2',
    },
    {
      id: 4,
      letra: 'd) He perdido completamente el interés en el sexo.',
      valor: '3',
    }
    ]
  };


  constructor() { }

  ngOnInit() {
  }

    test(){

    this.isTest = false;
    this.isTesting = true;
    this.isForm1 = true;

  }

  guardar(){

    this.suma = Number(this.respuesta.resp_1) + Number(this.respuesta.resp_2) + Number(this.respuesta.resp_3);
    console.log(this.suma);

    this.respuesta = {};
    this.isForm1 = false;
    this.isForm2 = true;

  }

  guardarDos(){
    this.suma += Number(this.respuesta.resp_4) + Number(this.respuesta.resp_5) + Number(this.respuesta.resp_6);
    console.log(this.suma);

    this.respuesta = {};
    this.isForm3 = true;
    this.isForm2 = false;
  }

  guardarTres(){
    this.suma += Number(this.respuesta.resp_4) + Number(this.respuesta.resp_5) + Number(this.respuesta.resp_6);
    console.log(this.suma);

    this.respuesta = {};
    this.isForm4 = true;
    this.isForm3 = false;
  }

  guardarCuatro(){
    this.suma += Number(this.respuesta.resp_4) + Number(this.respuesta.resp_5) + Number(this.respuesta.resp_6);
    console.log(this.suma);

    this.respuesta = {};
    this.isForm5 = true;
    this.isForm4 = false;
  }

  guardarCinco(){
    this.suma += Number(this.respuesta.resp_4) + Number(this.respuesta.resp_5) + Number(this.respuesta.resp_6);
    console.log(this.suma);

    this.respuesta = {};
    this.isForm6 = true;
    this.isForm5 = false;
  }

  guardarSeis(){
    this.suma += Number(this.respuesta.resp_4) + Number(this.respuesta.resp_5) + Number(this.respuesta.resp_6);
    console.log(this.suma);

    this.respuesta = {};
    this.isForm7 = true;
    this.isForm6 = false;
  }

  guardarSiete(){
    this.suma += Number(this.respuesta.resp_4) + Number(this.respuesta.resp_5) + Number(this.respuesta.resp_6);
    console.log(this.suma);

    this.respuesta = {};
    this.isForm7 = false;
    this.isTesting = false;
    this.resultado = true;
  }
}
