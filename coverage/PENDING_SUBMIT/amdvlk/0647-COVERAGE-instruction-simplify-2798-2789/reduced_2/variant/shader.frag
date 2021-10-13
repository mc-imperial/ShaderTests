#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

struct GLF_live2QuicksortObject {
 int numbers[10];
} ;

GLF_live2QuicksortObject GLF_live2obj = GLF_live2QuicksortObject(int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1));

precision highp int;

precision highp float;

void main()
{
 int GLF_live2i = 1;
 GLF_live2i = - 87256;
 for(int GLF_live2j = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); 1)
  {
   _GLF_global_loop_count ++;
   if(GLF_live2obj.numbers[1] <= 1)
    {
     GLF_live2i ++;
     {
      int GLF_live2i = GLF_live2i;
      GLF_live2obj.numbers[clamp(GLF_live2i, 0, 10 - 1)] = 1;
     }
    }
  }
}
