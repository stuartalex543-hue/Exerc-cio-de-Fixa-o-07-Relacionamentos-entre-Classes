import { Cliente } from "./Cliente.js";
import { Prontuario } from "./Prontuario.js";
import { Veterinario } from "./Veterinario.js";

export class Animal {

    #nome;
    #especie;
    #cliente;
    #prontuario;
    #veterinarios;

    constructor(nome, especie) {
        this.#nome = nome;
        this.#especie = especie;
        this.#cliente = null;
        this.#prontuario = null;
        this.#veterinarios = [];
    }

    // =========================
    // GETTERS
    // =========================

    getNome() {
        return this.#nome;
    }

    getEspecie() {
        return this.#especie;
    }

    getCliente() {
        return this.#cliente;
    }

    getProntuario() {
        return this.#prontuario;
    }

    getVeterinarios() {
        return [...this.#veterinarios];
    }

    // =========================
    // SETTERS
    // =========================

    setNome(nome) {

        if (typeof nome !== "string") {
            return false;
        }

        this.#nome = nome;
        return true;
    }

    setEspecie(especie) {

        if (typeof especie !== "string") {
            return false;
        }

        this.#especie = especie;
        return true;
    }

    // =========================
    // RELACIONAMENTO COM CLIENTE
    // 1 CLIENTE : N ANIMAIS
    // =========================

    setCliente(cliente) {

        if (!(cliente instanceof Cliente)) {
            return false;
        }

        // Animal só pode ter um cliente
        if (this.#cliente !== null &&
            this.#cliente !== cliente) {
            return false;
        }

        this.#cliente = cliente;

        // Referência cruzada
        if (!cliente.getAnimais().includes(this)) {
            cliente.addAnimal(this);
        }

        return true;
    }

    // =========================
    // RELACIONAMENTO 1:1
    // ANIMAL : PRONTUARIO
    // =========================

    setProntuario(prontuario) {

        if (!(prontuario instanceof Prontuario)) {
            return false;
        }

        // Cada animal possui apenas um prontuário
        if (this.#prontuario !== null &&
            this.#prontuario !== prontuario) {
            return false;
        }

        // Um prontuário também pertence a apenas um animal
        if (prontuario.getAnimal() !== null &&
            prontuario.getAnimal() !== this) {
            return false;
        }

        this.#prontuario = prontuario;

        // Referência cruzada
        if (prontuario.getAnimal() !== this) {
            prontuario.setAnimal(this);
        }

        return true;
    }

    // =========================
    // RELACIONAMENTO N:N
    // ANIMAL : VETERINARIO
    // =========================

    addVeterinario(veterinario) {

        if (!(veterinario instanceof Veterinario)) {
            return false;
        }

        // Evita duplicidade
        if (this.#veterinarios.includes(veterinario)) {
            return true;
        }

        this.#veterinarios.push(veterinario);

        // Referência cruzada
        if (!veterinario.getAnimais().includes(this)) {
            veterinario.addAnimal(this);
        }

        return true;
    }

    // =========================
    // LISTAGEM
    // =========================

    listarVeterinarios() {

        console.log(`\nVeterinários responsáveis por ${this.#nome}:`);

        if (this.#veterinarios.length === 0) {
            console.log("Nenhum veterinário cadastrado.");
            return;
        }

        for (const veterinario of this.#veterinarios) {
            console.log(
                `• Dr(a). ${veterinario.getNome()} - CRMV: ${veterinario.getCRMV()}`
            );
        }
    }
}