#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

float GLF_live1s_g = 1.0;

precision highp int;

precision highp float;

void main()
{
 do
  {
   _GLF_global_loop_count ++;
   if(GLF_live1s_g > 1.0)
    {
    }
   GLF_live1s_g = 1.0;
   vec3 GLF_live1temp = vec3(1.0);
   GLF_live1temp = (1.0 - clamp(1.0, 1.0, GLF_live1s_g)) * vec3(1.0);
   GLF_live1s_g = GLF_live1temp.y;
  }
 while((true) && (_GLF_global_loop_count < _GLF_global_loop_bound));
}
