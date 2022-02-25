#version 320 es

precision highp float;

precision highp int;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void quicksort()
{
 float GLF_live5data[10] = float[10](1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 GLF_live5data = float[10](1.0, 1.0, 1.0, (1.0 / float(false)), 1.0, 1.0, 1.0, 1.0, 1.0, 1.0);
 for(int GLF_live5j = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_live5j ++)
  {
   _GLF_global_loop_count ++;
   bool GLF_live5checkSwap_inline_return_value_0 = true;
   GLF_live5checkSwap_inline_return_value_0 = (GLF_live5data[1]) > (GLF_live5data[GLF_live5j]);
   if(GLF_live5checkSwap_inline_return_value_0)
    {
     GLF_live5data[clamp(GLF_live5j, 0, 10 - 1)] = 1.0;
    }
  }
}
void main()
{
 quicksort();
}
