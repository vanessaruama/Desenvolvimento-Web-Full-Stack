using System;

namespace Exemplo
{
    class Program
    {
        static void Main(string[] args)
        {
            Bolinha bola = new Bolinha();
            bola.VirouEmoji("sorriso");
            Console.WriteLine("Hello World!");
            Console.ReadLine();
        }
    }

    class Cor
    {
        string nome;
    }

    class Forma
    {
        Cor cor;
    }

    class Coracao : Forma
    {
        public void Bater()
        {
            Console.WriteLine("Coracao bateu");
        }
    }

    class Triangulo : Forma
    {
        public void AchouAMumia()
        {
            Console.WriteLine("Achou a Mumia");
        }
    }

    class Bolinha : Forma 
    {
        public void VirouEmoji(string nome)
        {
            Console.WriteLine("Bolinha virou emoji" + nome);
        }
    }

    class Quadrado: Forma
    {
        public void VirouPiscina()
        {
            Console.WriteLine("Virou Piscina");
        }
    }
}