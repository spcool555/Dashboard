interface A {
    void display();
}

public class demo implements A {
    int x = 10;

    public void c() {
        System.out.println(x + "i am class demo");
    }

    public void display() {
        System.out.println("I am implementing the interface");
    }

    public static void main(String[] args) {
        demo d = new demo();
        d.display();
        d.c();

    }
}
