#version 320 es

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

float GLF_dead10nb_mod(float GLF_dead10limit)
{
 for(int GLF_dead10i = 1; (GLF_dead10i < 800) && (_GLF_global_loop_count < _GLF_global_loop_bound); GLF_dead10i ++)
  {
   _GLF_global_loop_count ++;
   if(float(GLF_dead10i) >= GLF_dead10limit)
    {
     return 1.0;
    }
  }
 return 1.0;
}
precision highp float;

precision highp int;

void main()
{
 GLF_dead10nb_mod(vec3(35.61, 1.0, 1.0).xzxz.x);
 GLF_dead10nb_mod(1.0);
}
