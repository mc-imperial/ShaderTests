#version 320 es

precision highp int;

precision highp float;

const int _GLF_global_loop_bound = 100;

int _GLF_global_loop_count = 0;

int GLF_dead10data[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1), GLF_dead10temp[10] = int[10](1, 1, 1, 1, 1, 1, 1, 1, 1, 1);

precision highp float;

precision highp int;

float compute_value()
{
 for(int i = 1; (true) && (_GLF_global_loop_count < _GLF_global_loop_bound); i ++)
  {
   _GLF_global_loop_count ++;
   int GLF_live4index = 1;
   GLF_dead10temp[clamp(GLF_live4index ++, 0, 10 - 1)] = GLF_dead10data[clamp(sign(i), 0, 1)];
   int GLF_dead10i = 1;
   GLF_dead10data[clamp(GLF_dead10i, 0, 10 - 1)] = GLF_dead10temp[1];
  }
 return 1.0;
}
void main()
{
 compute_value();
}
