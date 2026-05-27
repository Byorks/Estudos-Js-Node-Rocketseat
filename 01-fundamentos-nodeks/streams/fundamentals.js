// Netflix & Spotify

// Importação de clientes via CSV (Excel)
// Através do streaming enquanto está sendo feito o upload neste caso já poderiamos ir inserindo no banco de dados o que chegou
// 1gb - 1.000.000
// POST /upload import.csv

// 10mb/s - 100s para o envio total

// 100s -> Inserções no banco de dados

// 10mb/s -> 10.000 linhas por segundo

// Readble Streams / Writable Streams

// Streams ->

// Aqui estamos recebendo uma string via stdin e enviando para stdout atravéz do pipe
// Trabalhamos com Duplex que vamos entender mais tarde
// process.stdin
// .pipe(process.stdout)

// Como construir streams do total zero
import { Readable } from "node:stream";

class OneToHundredStream extends Readable {
  index = 1;

  // toda Stream tem um método obrigatório que é o:
  _read() {
    // uma stream de leitura tem como propósito enviar dados/ fornecer informações
    const i = this.index++;

    setTimeout(() => {
      if (i > 100) {
        // quando entrar aqui estamos dizendo acabou, não tenho mais infos para serem enviadas a partir dessa stream
        this.push(null);
      } else {
        const buf = Buffer.from(String(i));

        this.push(buf);
      }
    }, 1000);
  }
}
// Conseguimos ver como mesmo sem terminar o processo de verificação do for, ele vai apresentando no stdout os números, isso é ótimo porque
// é possível processar a medida que vai sendo executado aos poucos.
// Normalmente não faremos algo tão na mão como aqui, mas nosso response vem com os métodos como pipe aqui utilizado

new OneToHundredStream().pipe(process.stdout);
