import { Cliente } from "./objetos/Cliente.js";
import { Animal } from "./objetos/Animal.js";
import { Prontuario } from "./objetos/Prontuario.js";
import { Veterinario } from "./objetos/Veterinario.js";


// =====================================================
// 1. CRIAÇÃO DO CLIENTE
// =====================================================

const cliente = new Cliente(
    "Alexandre Stuart Ramos de Almeida",
    "(61) 99112-0086"
);


// =====================================================
// 2. CRIAÇÃO DOS ANIMAIS
// =====================================================

const rex = new Animal(
    "Rex",
    "Cachorro"
);

const luna = new Animal(
    "Luna",
    "Gata"
);

const mel = new Animal(
  "Mel",
  "Peixe"
);

const cacau = new Animal(
  "Cacau",
  "Cadela"
);

const jade = new Animal(
  "Jade",
  "Cadela"
);

// =====================================================
// 3. CRIAÇÃO DOS PRONTUÁRIOS
// =====================================================

const prontuarioRex = new Prontuario(
    "PR-001",
    "Animal vacinado. Histórico de alergia medicamentosa."
);

const prontuarioLuna = new Prontuario(
    "PR-002",
    "Animal saudável. Vacinação em dia."
);

const prontuarioMel = new Prontuario(
  "PR-003",
  "Animal saudável. Vacinação em dia."
);

const prontuarioCacau = new Prontuario(
  "PR-004",
  "Animal saudável. Vacinação em dia. No cio."
);

const prontuarioJade = new Prontuario(
  "PR-005",
  "Animal saudável. Vacinação em dia. No cio."
);

// =====================================================
// 4. CRIAÇÃO DOS VETERINÁRIOS
// =====================================================

const veterinario1 = new Veterinario(
    "Anna Sofia",
    "CRMV-12345"
);

const veterinario2 = new Veterinario(
    "Celina Veloso",
    "CRMV-67890"
);


// =====================================================
// 5. RELACIONAMENTO CLIENTE -> ANIMAIS
// =====================================================

cliente.addAnimal(rex);
cliente.addAnimal(luna);
cliente.addAnimal(mel);
cliente.addAnimal(cacau);
cliente.addAnimal(jade);



// =====================================================
// 6. RELACIONAMENTO ANIMAL -> PRONTUÁRIO
// =====================================================

rex.setProntuario(prontuarioRex);
luna.setProntuario(prontuarioLuna);
mel.setProntuario(prontuarioMel);
cacau.setProntuario(prontuarioCacau);
jade.setProntuario(prontuarioJade);


// =====================================================
// 7. RELACIONAMENTO N:N
// =====================================================

// Anna Sofia atende Rex, Luna e Cacau
veterinario1.addAnimal(rex);
veterinario1.addAnimal(luna);
veterinario1.addAnimal(cacau);

// Celina Veloso atende Mel e Jade
veterinario2.addAnimal(mel);
veterinario1.addAnimal(jade);


// =====================================================
// 8. INFORMAÇÕES DO CLIENTE
// =====================================================

console.log(" ");
console.log("========================================");
console.log("          DADOS DO CLIENTE");
console.log("========================================");

console.log("Nome:", cliente.getNome());
console.log("Telefone:", cliente.getTelefone());


// =====================================================
// 9. LISTA DE ANIMAIS
// =====================================================

console.log("\n========================================");
console.log("             ANIMAIS");
console.log("========================================");

cliente.listarAnimais();


// =====================================================
// 10. DADOS COMPLETOS DOS ANIMAIS
// =====================================================

for (const animal of cliente.getAnimais()) {

    console.log("\n========================================");
    console.log(`             ANIMAL: ${animal.getNome()}`);
    console.log("========================================");

    console.log("Nome:", animal.getNome());
    console.log("Espécie:", animal.getEspecie());

    // Cliente
    console.log(
        "Cliente:",
        animal.getCliente()?.getNome()
    );

    // Prontuário
    const prontuario = animal.getProntuario();

    if (prontuario) {

        console.log("\nProntuário:");
        console.log("Número:", prontuario.getNumero());
        console.log(
            "Observações:",
            prontuario.getObservacoes()
        );

        console.log(
            "Animal no prontuário:",
            prontuario.getAnimal()?.getNome()
        );
    }

    // Veterinários
    animal.listarVeterinarios();
}


// =====================================================
// 11. TESTE DAS REFERÊNCIAS CRUZADAS
// =====================================================

console.log("\n===================================================");
console.log("             TESTE DAS REFERÊNCIAS");
console.log("===================================================");

console.log(" ");
console.log(
    "Cliente possui Rex:                         ",
    cliente.getAnimais().includes(rex)
);

console.log(
    "Rex possui Alexandre Stuart como cliente:   ",
    rex.getCliente() === cliente
);

console.log(
    "Rex possui seu prontuário:                  ",
    rex.getProntuario() === prontuarioRex
);

console.log(
    "Prontuário aponta para Rex:                 ",
    prontuarioRex.getAnimal() === rex
);

console.log(
    "Rex possui Anna Sofia como veterinária:     ",
    rex.getVeterinarios().includes(veterinario1)
);

console.log(
    "Anna Sofia possui Rex como paciente:        ",
    veterinario1.getAnimais().includes(rex)
);

console.log(
    "Rex possui Celina veloso como veterinária:  ",
    rex.getVeterinarios().includes(veterinario2)
);

console.log(
    "Celina Veloso possui Rex como paciente:     ",
    veterinario2.getAnimais().includes(rex)
);



console.log(" ");
console.log(
  "Cliente possui Luna:                        ",
  cliente.getAnimais().includes(luna)
);

console.log(
  "Luna possui Alexandre Stuart como cliente:  ",
  luna.getCliente() === cliente
);

console.log(
  "Luna possui seu prontuário:                 ",
  luna.getProntuario() === prontuarioLuna
);

console.log(
  "Prontuário aponta para Luna:                ",
  prontuarioLuna.getAnimal() === luna
);

console.log(
  "Luna possui Anna Sofia como veterinária:    ",
  luna.getVeterinarios().includes(veterinario1)
);

console.log(
  "Anna Sofia possui Luna como paciente:       ",
  veterinario1.getAnimais().includes(luna)
);

console.log(
  "Luna possui Celina veloso como veterinária: ",
  luna.getVeterinarios().includes(veterinario2)
);

console.log(
  "Celina Veloso possui Luna como paciente:    ",
  veterinario2.getAnimais().includes(luna)
);



console.log(" ");
console.log(
  "Cliente possui Mel:                         ",
  cliente.getAnimais().includes(mel)
);

console.log(
  "Mel possui Alexandre Stuart como cliente:   ",
  mel.getCliente() === cliente
);

console.log(
  "Mel possui seu prontuário:                  ",
  mel.getProntuario() === prontuarioLuna
);

console.log(
  "Prontuário aponta para Mel:                 ",
  prontuarioMel.getAnimal() === mel
);

console.log(
  "Mel possui Anna Sofia como veterinária:     ",
  mel.getVeterinarios().includes(veterinario1)
);

console.log(
  "Anna Sofia possui Mel como paciente:        ",
  veterinario1.getAnimais().includes(mel)
);

console.log(
  "Mel possui Celina veloso como veterinária:  ",
  mel.getVeterinarios().includes(veterinario2)
);

console.log(
  "Celina Veloso possui Mel como paciente:     ",
  veterinario2.getAnimais().includes(mel)
);


console.log(" ");
console.log(
  "Cliente possui Cacau:                       ",
  cliente.getAnimais().includes(cacau)
);

console.log(
  "Cacau possui Alexandre Stuart como cliente: ",
  cacau.getCliente() === cliente
);

console.log(
  "Cacau possui seu prontuário:                ",
  cacau.getProntuario() === prontuarioCacau
);

console.log(
  "Prontuário aponta para Cacau:               ",
  prontuarioCacau.getAnimal() === cacau
);

console.log(
  "Cacau possui Anna Sofia como veterinária:   ",
  cacau.getVeterinarios().includes(veterinario1)
);

console.log(
  "Anna Sofia possui Cacau como paciente:      ",
  veterinario1.getAnimais().includes(cacau)
);

console.log(
  "Cacau possui Celina veloso como veterinária:",
  cacau.getVeterinarios().includes(veterinario2)
);

console.log(
  "Celina Veloso possui Cacau como paciente:   ",
  veterinario2.getAnimais().includes(cacau)
);



console.log(" ");
console.log(
  "Cliente possui Jade:                        ",
  cliente.getAnimais().includes(jade)
);

console.log(
  "Jade possui Alexandre Stuart como cliente:  ",
  jade.getCliente() === cliente
);

console.log(
  "Jade possui seu prontuário:                 ",
  jade.getProntuario() === prontuarioJade
);

console.log(
  "Prontuário aponta para Jade:                ",
  prontuarioJade.getAnimal() === jade
);

console.log(
  "Jade possui Anna Sofia como veterinária:    ",
  jade.getVeterinarios().includes(veterinario1)
);

console.log(
  "Anna Sofia possui Jade como paciente:       ",
  veterinario1.getAnimais().includes(jade)
);

console.log(
  "Jade possui Celina veloso como veterinária: ",
  jade.getVeterinarios().includes(veterinario2)
);

console.log(
  "Celina Veloso possui Jade como paciente:    ",
  veterinario2.getAnimais().includes(jade)
);