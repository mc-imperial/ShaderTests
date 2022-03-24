#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct GLF_dead6QuicksortObject {
 int numbers[10];
} ;

GLF_dead6QuicksortObject GLF_dead6obj = GLF_dead6QuicksortObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

void GLF_dead6quicksort()
{
 int GLF_dead6l = 1;
 int GLF_dead6stack[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);
 int GLF_dead6top = 1;
 GLF_dead6top = - 1;
 ++ GLF_dead6top;
 while((GLF_dead6top >= 0) && (_GLF_global_loop_count < _GLF_global_loop_bound))
  {
   _GLF_global_loop_count ++;
   GLF_dead6l = GLF_dead6stack[GLF_dead6top --];
   {
    int GLF_dead6l = GLF_dead6l;
    int GLF_dead6i = 1;
    GLF_dead6i = GLF_dead6l;
    {
     int GLF_dead6i = GLF_dead6i;
     int GLF_dead6j = 1;
     int GLF_dead6temp = 1;
     GLF_dead6temp = GLF_dead6obj.numbers[GLF_dead6i];
     GLF_dead6obj.numbers[clamp(GLF_dead6j, 0, 10 - 1)] = GLF_dead6temp;
    }
   }
   if(1 > GLF_dead6l)
    {
     GLF_dead6stack[clamp(++ GLF_dead6top, 0, 10 - 1)] = GLF_dead6l;
    }
  }
}
precision highp int;

precision highp float;

void main()
{
 GLF_dead6quicksort();
}
