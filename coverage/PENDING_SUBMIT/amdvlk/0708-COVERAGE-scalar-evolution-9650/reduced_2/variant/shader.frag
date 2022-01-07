#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

void main()
{
 vec4 GLF_live11c = vec4(1.0);
 int GLF_live11i = 1;
 int GLF_live11_looplimiter1 = 1;
 do
  {
   _GLF_global_loop_count ++;
   if(GLF_live11_looplimiter1 >= 3)
    {
     break;
    }
   GLF_live11_looplimiter1 ++;
   GLF_live11c[clamp(GLF_live11i, 0, 4 - 1)] = 1.0;
   GLF_live11i ++;
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
}
