#version 320 es

#ifndef REDUCER
#define _GLF_ZERO(X, Y)                   (Y)
#define _GLF_ONE(X, Y)                    (Y)
#define _GLF_FALSE(X, Y)                  (Y)
#define _GLF_TRUE(X, Y)                   (Y)
#define _GLF_IDENTITY(X, Y)               (Y)
#define _GLF_DEAD(X)                      (X)
#define _GLF_FUZZED(X)                    (X)
#define _GLF_WRAPPED_LOOP(X)              X
#define _GLF_WRAPPED_IF_TRUE(X)           X
#define _GLF_WRAPPED_IF_FALSE(X)          X
#define _GLF_SWITCH(X)                    X
#define _GLF_MAKE_IN_BOUNDS_INT(IDX, SZ)  clamp(IDX, 0, SZ - 1)
#define _GLF_MAKE_IN_BOUNDS_UINT(IDX, SZ) clamp(IDX, 0u, SZ - 1u)
#endif

// END OF GENERATED HEADER
precision highp float;

precision highp int;

precision highp float;

layout(set = 0, binding = 0) uniform buf0 {
 highp vec2 injectionSwitch;
};
layout(location = 0) out vec4 _GLF_color;

layout(set = 0, binding = 1) uniform sampler2D tex;

void main()
{
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-540.947, 9.5, -6.8, -58.32);
  }
 {
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(1529.4241, -4627.6156, -410.232, 1333.5343);
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(759.403, 32.99, 7.0, -30.28);
      if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < log(1.0)))))
       {
        _GLF_color = clamp(vec4(201.372, 6.2, 9.0, 68.68), -10.14, -91.91);
       }
     }
    _GLF_color = vec4(-0.2, -28.94, -1.5, -600.787);
   }
  int GLF_live0target = _GLF_FUZZED(16371);
  if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
   {
    _GLF_color = (mat3x4(9807.9321, 5.0, 877.862, 8.8, 76.85, 4429.9675, 1541.1081, 1.6, -1.3, 26.21, 6954.7102, 752.124) * vec3(-934.276, -3746.3483, -3964.9348));
   }
  {
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_IDENTITY(false, ! (! (false)))))
      {
       _GLF_color = vec4(86.10, 8369.1837, -3558.8499, -0.1);
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-8.6, -102.133, -1.6, 9077.8635);
        }
       _GLF_color = vec4(815.996, -19.97, 5.3, 591.890).bbrr;
      }
     _GLF_color = vec4(-59.52, 6.0, 9.4, 3.5);
     if(_GLF_DEAD(_GLF_IDENTITY(false, bool(bvec2(false, true)))))
      {
       _GLF_color = vec4(-3.7, 217.072, 8585.5759, 188.942);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(25.04, -240.231, 620.150, _GLF_IDENTITY(-0.6, (true ? -0.6 : _GLF_FUZZED(-1616.3180))));
        }
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(11.74, -71.41, -8.6, 4790.1681);
      }
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(91.97, 425.083, 22.16, -5290.4329);
      }
     _GLF_color = vec4(464.152, 6290.1110, -8235.8156, 4.7);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = _GLF_IDENTITY(vec4(6.9, _GLF_IDENTITY(0.5, float(mat2(0.5, 0.0, 0.0, 1.0))), -3572.8464, 2.4), min(vec4(6.9, _GLF_IDENTITY(0.5, float(mat2(0.5, 0.0, 0.0, 1.0))), -3572.8464, 2.4), vec4(6.9, _GLF_IDENTITY(0.5, float(mat2(0.5, 0.0, 0.0, 1.0))), -3572.8464, 2.4)));
     if(_GLF_DEAD(false))
      {
       _GLF_color = _GLF_IDENTITY(round(vec4(-12.66, -16.87, -616.833, -1790.6538)), max(_GLF_IDENTITY(round(vec4(-12.66, -16.87, -616.833, -1790.6538)), clamp(round(vec4(-12.66, -16.87, _GLF_IDENTITY(-616.833, float(mat2(-616.833, sqrt(0.0), 0.0, exp(0.0)))), -1790.6538)), _GLF_IDENTITY(round(vec4(-12.66, -16.87, -616.833, -1790.6538)), (round(vec4(-12.66, -16.87, -616.833, -1790.6538))) * mat4(1.0)), round(vec4(-12.66, -16.87, -616.833, -1790.6538)))), round(vec4(-12.66, -16.87, _GLF_IDENTITY(-616.833, 0.0 + (_GLF_IDENTITY(-616.833, (-616.833) / 1.0))), -1790.6538))));
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = pow(vec4(-7.8, 6454.6759, -0.2, 4430.9300), vec4(-351.371, 2076.1696, 7282.6963, -97.44));
     if(_GLF_DEAD(false))
      {
       _GLF_color = (vec4(6.2, 29.21, -1.1, -5799.3233) * vec4(972.456, 733.346, -22.61, -1322.0432));
      }
    }
   GLF_live0target;
   if(_GLF_DEAD(_GLF_FALSE(false, _GLF_IDENTITY(_GLF_IDENTITY((gl_FragCoord.x < 0.0), _GLF_IDENTITY(bool(bvec4((gl_FragCoord.x < 0.0), false, false, true)), (bool(bvec4((gl_FragCoord.x < 0.0), false, false, true))) || false)), ! (! (_GLF_IDENTITY((gl_FragCoord.x < 0.0), ((gl_FragCoord.x < 0.0)) || false)))))))
    {
     _GLF_color = mat2x4(109.644, 8.0, -1.5, -2.4, _GLF_IDENTITY(844.732, mix(float(_GLF_FUZZED(-11.61)), float(844.732), bool(true))), _GLF_IDENTITY(52.94, max(_GLF_IDENTITY(52.94, clamp(52.94, _GLF_IDENTITY(_GLF_IDENTITY(52.94, min(52.94, 52.94)), (52.94) + 0.0), 52.94)), 52.94)), -6.1, -4.7)[_GLF_IDENTITY(0, (0) / 1)];
     if(_GLF_DEAD(false))
      {
       _GLF_color = cos(vec4(5.0, -5.7, 83.45, -9.4));
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = ((_GLF_IDENTITY(true, bool(bvec3(true, false, _GLF_FALSE(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (false), (! (false)) && true))), (injectionSwitch.x > _GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, clamp(_GLF_IDENTITY(injectionSwitch, (true ? injectionSwitch : _GLF_IDENTITY(_GLF_FUZZED(injectionSwitch), (_GLF_FUZZED(_GLF_IDENTITY(injectionSwitch, vec2(injectionSwitch[0], injectionSwitch[1])))) / vec2(1.0, 1.0)))), injectionSwitch, _GLF_IDENTITY(_GLF_IDENTITY(injectionSwitch, mat2(1.0) * (injectionSwitch)), (false ? _GLF_FUZZED(vec2(-6.4, 7063.6923)) : _GLF_IDENTITY(injectionSwitch, mat2(1.0) * (injectionSwitch)))))).y, min(injectionSwitch.y, injectionSwitch.y))))))) ? vec4(6927.1991, -80.05, 4.4, _GLF_IDENTITY(-673.777, (true ? _GLF_IDENTITY(-673.777, mix(float(_GLF_FUZZED(-77.62)), float(-673.777), bool(true))) : _GLF_FUZZED(-6098.0013)))) : vec4(_GLF_IDENTITY(6.8, (_GLF_IDENTITY(6.8, clamp(6.8, 6.8, _GLF_IDENTITY(6.8, 0.0 + (6.8))))) - 0.0), 85.95, -4.0, -7.6)) + -90.24);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(8523.4254, 157.831, -862.016, -9702.9673);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < tan(0.0)))))
    {
     _GLF_color = (vec4(_GLF_IDENTITY(-88.34, 1.0 * (-88.34)), 9.8, _GLF_IDENTITY(-37.62, float(vec3(_GLF_IDENTITY(-37.62, (-37.62) + 0.0), abs(_GLF_IDENTITY(1.0, 1.0 * (_GLF_IDENTITY(1.0, clamp(_GLF_IDENTITY(1.0, min(1.0, 1.0)), _GLF_IDENTITY(1.0, max(1.0, 1.0)), 1.0))))), 1.0))), -2662.3106) * -2.6);
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(6121.1282, 0.4, 0.8, -130.660);
        }
       _GLF_color = vec4(57.40, 6429.4376, -72.02, -51.74);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(80.29, -376.475, -6.3, -4396.5514);
        }
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = vec4(-7516.6671, -8.2, 9607.0432, -3.1);
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(3990.9574, -0.2, 8.2, 237.672);
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, bool(bvec2(false, false))), _GLF_IDENTITY((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, float(mat3x2(injectionSwitch.y, 0.0, 1.0, 0.0, 0.0, 1.0)))), _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) && ((injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, float(mat3x2(injectionSwitch.y, 0.0, 1.0, 0.0, 0.0, 1.0)))))))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(_GLF_IDENTITY(-78.04, float(float(_GLF_IDENTITY(-78.04, (-78.04) / 1.0)))), -748.125, 790.291, -2213.5111);
      }
     _GLF_color = _GLF_IDENTITY(vec4(3.0, _GLF_IDENTITY(-9.5, max(_GLF_IDENTITY(-9.5, clamp(-9.5, -9.5, -9.5)), -9.5)), 9.3, _GLF_IDENTITY(-8896.4156, 0.0 + (-8896.4156))), clamp(vec4(3.0, _GLF_IDENTITY(-9.5, max(_GLF_IDENTITY(_GLF_IDENTITY(-9.5, min(-9.5, -9.5)), clamp(-9.5, -9.5, -9.5)), -9.5)), 9.3, _GLF_IDENTITY(-8896.4156, 0.0 + (-8896.4156))), vec4(3.0, _GLF_IDENTITY(-9.5, max(_GLF_IDENTITY(-9.5, clamp(-9.5, -9.5, -9.5)), -9.5)), 9.3, _GLF_IDENTITY(-8896.4156, 0.0 + (-8896.4156))), vec4(3.0, _GLF_IDENTITY(-9.5, max(_GLF_IDENTITY(-9.5, clamp(-9.5, -9.5, -9.5)), -9.5)), 9.3, _GLF_IDENTITY(-8896.4156, 0.0 + (_GLF_IDENTITY(-8896.4156, mix(float(-8896.4156), float(_GLF_FUZZED(-6197.2041)), bool(false))))))));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(844.946, 5168.9580, 6194.4776, 2.6);
    }
   if(_GLF_IDENTITY(_GLF_DEAD(false), ! (! (_GLF_DEAD(false)))))
    {
     _GLF_color = vec4(-77.95, 8968.9703, -997.893, 14.66);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(4.7, 138.607, 66.98, -36.09);
    }
  }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
   {
    if(_GLF_DEAD(false))
     {
      if(_GLF_IDENTITY(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < tan(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(628.508)), float(0.0), bool(true)))))), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < tan(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(628.508)), float(0.0), bool(true)))))))))), bool(bvec3(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, true && (false)), (gl_FragCoord.y < tan(_GLF_IDENTITY(0.0, mix(float(_GLF_IDENTITY(_GLF_FUZZED(628.508), (false ? _GLF_FUZZED(5.8) : _GLF_FUZZED(628.508)))), float(0.0), bool(true))))))), (_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(_GLF_IDENTITY(_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(628.508)), float(0.0), bool(true))), (_GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(628.508)), float(0.0), bool(true)))) - 0.0)))))) && true), false, true))))
       {
        if(_GLF_IDENTITY(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))), bool(bvec2(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))), _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))))
         {
          _GLF_color = (mat3x4(-5983.7711, -8.0, -81.93, -6.2, -3761.5591, -7.7, -1.5, -0.2, 37.04, -4.4, 8.7, -2329.5100) * vec3(6028.4482, 4402.1595, 2209.6696));
          if(_GLF_DEAD(false))
           {
            _GLF_color = vec4(-674.202, -563.114, -8.3, 5.9);
           }
         }
        _GLF_color = fract(vec4(-5085.9822, 5.4, 2.3, 7096.8806));
       }
      _GLF_color = (vec2(0.3, -332.133) * mat4x2(-26.42, -946.430, 5.1, -3332.8400, 79.69, 18.74, 6394.8116, 237.671));
     }
    _GLF_color = atan(vec4(34.33, -3.9, -84.91, -9.6));
    if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
     {
      _GLF_color = vec4(-8.3, _GLF_IDENTITY(_GLF_IDENTITY(-0.8, mix(float(_GLF_FUZZED(-45.62)), float(-0.8), bool(true))), 1.0 * _GLF_IDENTITY((_GLF_IDENTITY(-0.8, mix(float(_GLF_FUZZED(-45.62)), float(-0.8), bool(true)))), min(_GLF_IDENTITY((_GLF_IDENTITY(-0.8, mix(float(_GLF_FUZZED(-45.62)), float(-0.8), bool(true)))), clamp((_GLF_IDENTITY(-0.8, mix(float(_GLF_FUZZED(-45.62)), float(-0.8), bool(true)))), (_GLF_IDENTITY(-0.8, mix(float(_GLF_FUZZED(-45.62)), float(-0.8), bool(true)))), (_GLF_IDENTITY(-0.8, mix(float(_GLF_FUZZED(-45.62)), float(-0.8), bool(true)))))), (_GLF_IDENTITY(-0.8, mix(float(_GLF_FUZZED(-45.62)), float(-0.8), bool(true))))))), 7.3, -8.7);
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(-9.0, -3.5, 657.508, 6.9);
     }
    if(_GLF_DEAD(false))
     {
      _GLF_color = cos(vec4(4580.2985, 9551.6171, -8.0, -292.580));
     }
   }
  if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
   {
    _GLF_color = pow(vec4(-1353.2464, -74.10, -8085.8826, -0.1), atan(vec4(10.52, 2.0, 8.5, -4662.0742)));
    if(_GLF_DEAD(false))
     {
      _GLF_color = vec4(18.69, 247.400, -1.4, 9.9);
      if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
       {
        _GLF_color = sin(vec4(-33.39, 0.8, -3809.2954, -0.1));
       }
     }
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(-420.867, -980.329, -8110.9352, -70.16);
     }
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(-297.264, -56.36, _GLF_IDENTITY(4977.4869, max(_GLF_IDENTITY(4977.4869, 1.0 * (4977.4869)), _GLF_IDENTITY(4977.4869, (false ? _GLF_FUZZED(sqrt(4.4)) : 4977.4869)))), 45.21);
    if(_GLF_DEAD(false))
     {
      _GLF_color = log2(vec4(0.9, -16.71, -62.98, -1.7));
     }
   }
  if(_GLF_DEAD(false))
   {
    _GLF_color = vec4(3.5, 20.15, -8745.9916, 10.79);
    if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
     {
      _GLF_color = vec4(-776.416, 0.5, -12.11, -82.59);
     }
   }
 }
 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < 0.0, bool(bvec4(gl_FragCoord.y < 0.0, true, false, true)))))))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < tan(_GLF_IDENTITY(0.0, (0.0) + length(vec2(0.0, 0.0))))))))
    {
     _GLF_color = vec4(-5622.3244, -6955.0096, 7.1, -7118.2830);
    }
   _GLF_color = vec4(intBitsToFloat(_GLF_IDENTITY(ivec2(-43000, -58735), (true ? ivec2(-43000, -58735) : _GLF_FUZZED(ivec2(37019, 32941))))), 0.3, 602.884);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = trunc(vec4(3.1, -77.97, 9.5, -655.407));
  }
 int i = 0;
 vec2 uvstep = vec2(1.0) * (1.0 / 256.0);
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-5.4, 7.4, 5.1, 2.3);
    }
   _GLF_color = vec4(vec2(20.22, 2.9), roundEven(-3.8), -9.7);
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(8.8, 64.44, -987.362, 977.446);
    }
  }
 float slope = _GLF_IDENTITY(2.0 / _GLF_IDENTITY(256.0, max(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(-5636.5847)), bool(false))), mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.y < 0.0), ((gl_FragCoord.y < 0.0)) || false))))), (_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) ? _GLF_IDENTITY(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(-5636.5847)), bool(false))), mix(float(_GLF_IDENTITY(256.0, min(_GLF_IDENTITY(256.0, mix(float(_GLF_FUZZED(2789.8385)), float(256.0), bool(true))), 256.0))), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, _GLF_IDENTITY((gl_FragCoord.y < 0.0), ((gl_FragCoord.y < 0.0)) || false))))) : _GLF_FUZZED(-54.25))), 256.0)), _GLF_IDENTITY(float(vec3(2.0 / _GLF_IDENTITY(256.0, max(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(256.0, clamp(256.0, 256.0, _GLF_IDENTITY(256.0, min(256.0, 256.0)))), mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < 0.0, true && (gl_FragCoord.y < 0.0))))))), _GLF_IDENTITY(clamp(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), _GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, _GLF_IDENTITY((6.3), min((6.3), (6.3))) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), _GLF_IDENTITY(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(_GLF_IDENTITY(6.3, (6.3) - 0.0), (_GLF_IDENTITY(6.3, (6.3) - 0.0)) * 1.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), (false ? _GLF_FUZZED(50.05) : _GLF_IDENTITY(256.0, _GLF_IDENTITY(mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(false || (false), ! (! (_GLF_IDENTITY(false || (false), (false || (false)) && true))))), (gl_FragCoord.y < 0.0)))), min(_GLF_IDENTITY(mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(false || (false), ! (! (_GLF_IDENTITY(false || (false), (false || (false)) && true))))), (gl_FragCoord.y < 0.0)))), (true ? mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(false || (false), ! (! (_GLF_IDENTITY(false || (false), (false || (false)) && true))))), (gl_FragCoord.y < 0.0)))) : _GLF_FUZZED(-0.2))), _GLF_IDENTITY(mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(false || (false), ! (! (_GLF_IDENTITY(false || (false), (false || (false)) && true))))), (gl_FragCoord.y < 0.0)))), max(mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(false || (false), ! (! (_GLF_IDENTITY(false || (false), (false || (false)) && true))))), (gl_FragCoord.y < 0.0)))), mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(_GLF_IDENTITY(false, _GLF_IDENTITY(false || (false), ! (! (_GLF_IDENTITY(false || (false), (false || (false)) && true))))), (gl_FragCoord.y < 0.0)))))))))))), max(clamp(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), _GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_IDENTITY(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0)), mix(float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), float(_GLF_FUZZED(-3.8)), bool(false)))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), _GLF_IDENTITY(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y, mix(float(_GLF_FUZZED(-2.4)), float(gl_FragCoord.y), bool(_GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))) < 0.0))))), (false ? _GLF_FUZZED(50.05) : _GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))))), clamp(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, _GLF_IDENTITY((_GLF_IDENTITY(gl_FragCoord.y < 0.0, false || (gl_FragCoord.y < 0.0))), true && (_GLF_IDENTITY((_GLF_IDENTITY(gl_FragCoord.y < 0.0, false || (gl_FragCoord.y < 0.0))), bool(bool((_GLF_IDENTITY(gl_FragCoord.y < 0.0, false || (gl_FragCoord.y < 0.0)))))))))))), _GLF_IDENTITY(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(0.0, 1.0 * (0.0))))))), mix(float(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(0.0, 1.0 * (0.0)))))))), float(_GLF_FUZZED(660.661)), bool(false))), _GLF_IDENTITY(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), (_GLF_IDENTITY(false ? _GLF_FUZZED(_GLF_IDENTITY(50.05, (true ? 50.05 : _GLF_FUZZED(70.63)))) : _GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < 0.0, (gl_FragCoord.y < 0.0) || false)))))), float(mat4(false ? _GLF_FUZZED(_GLF_IDENTITY(50.05, (true ? 50.05 : _GLF_FUZZED(70.63)))) : _GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < 0.0, (gl_FragCoord.y < 0.0) || false)))))), 0.0, sqrt(1.0), 1.0, 0.0, 0.0, 1.0, 1.0, sqrt(sqrt(0.0)), 0.0, tan(0.0), 1.0, abs(1.0), exp(0.0), 1.0, 0.0))))))))), 256.0)), 1.0, 0.0)), mix(float(float(vec3(_GLF_IDENTITY(_GLF_IDENTITY(2.0, max(_GLF_IDENTITY(2.0, (2.0) / 1.0), 2.0)), max(2.0, 2.0)) / _GLF_IDENTITY(_GLF_IDENTITY(256.0, max(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), 256.0)), clamp(_GLF_IDENTITY(256.0, max(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, _GLF_IDENTITY((6.3) - 0.0, clamp((6.3) - 0.0, (6.3) - 0.0, _GLF_IDENTITY((6.3) - 0.0, ((6.3) - 0.0) * 1.0)))))), bool(_GLF_FALSE(false, (_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)), (_GLF_IDENTITY(true ? _GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, mat4(_GLF_IDENTITY(1.0, float(_GLF_IDENTITY(mat4x2(1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, determinant(mat4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0))), mat2(1.0) * (mat4x2(1.0, 1.0, 0.0, 0.0, 1.0, 0.0, 0.0, determinant(mat4(0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 0.0, 1.0, 1.0, 0.0, 0.0)))))))) * (gl_FragCoord)), (_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x, mix(float(_GLF_IDENTITY(gl_FragCoord.x, float(mat3(gl_FragCoord.x, 1.0, 0.0, 0.0, 0.0, 0.0, tan(0.0), 1.0, 1.0)))), float(_GLF_FUZZED(9.7)), bool(false))) < 0.0)) ? _GLF_FUZZED(_GLF_color) : _GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)))) : _GLF_FUZZED(vec4(6648.3028, 57.65, -8.3, 4093.6805)), vec4(vec4(true ? _GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)), (_GLF_FALSE(false, (gl_FragCoord.x < 0.0)) ? _GLF_FUZZED(_GLF_color) : _GLF_IDENTITY(gl_FragCoord, mat4(1.0) * (gl_FragCoord)))) : _GLF_FUZZED(vec4(6648.3028, 57.65, -8.3, 4093.6805))))))).y < 0.0))))), 256.0)), _GLF_IDENTITY(256.0, max(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), 256.0)), _GLF_IDENTITY(256.0, max(_GLF_IDENTITY(256.0, mix(float(256.0), float(_GLF_FUZZED(_GLF_IDENTITY(6.3, (6.3) - 0.0))), bool(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))), 256.0)))), 1.0, 0.0))), float(_GLF_FUZZED(-8109.1302)), bool(false))));
 if(_GLF_DEAD(false))
  {
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
    {
     _GLF_color = vec4(115.925, -1.5, -68.26, 1657.1823);
    }
   _GLF_color = vec4(_GLF_IDENTITY(-0.6, max(-0.6, _GLF_IDENTITY(-0.6, max(-0.6, -0.6)))), 477.465, 6.6, _GLF_IDENTITY(-6.9, (-6.9) / 1.0));
   if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, (false) || _GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))), (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = (vec4(341.965, 3987.7866, 589.816, 6921.7460) * mat4(1960.9080, -58.45, 494.386, 2.2, 7.4, 826.752, 3.9, -6.8, 79.72, -6367.8218, -780.135, -12.02, 8.5, 56.87, -1486.8276, _GLF_IDENTITY(-6.7, (true ? -6.7 : _GLF_FUZZED(slope)))));
     if(_GLF_DEAD(false))
      {
       _GLF_color = (9490.8997 * vec4(340.448, 8.0, -702.921, 596.553));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-3.2, -92.46, 20.14, -7463.6033);
      }
    }
   if(_GLF_DEAD(false))
    {
     _GLF_IDENTITY(_GLF_color = vec4(-4371.7072, 5.8, 66.40, 47.35), (_GLF_color = vec4(-4371.7072, 5.8, 66.40, 47.35)) + vec4(0.0, 0.0, 0.0, 0.0));
     if(_GLF_DEAD(false))
      {
       _GLF_color = (vec4(-3424.9407, -4849.8379, 9535.6726, -988.168) / 415.088);
      }
    }
  }
 vec2 coord = _GLF_IDENTITY(gl_FragCoord.xy * (1.0 / 256.0), (_GLF_IDENTITY(gl_FragCoord, max(gl_FragCoord, gl_FragCoord)).xy * (1.0 / 256.0)) * sqrt(vec2(1.0, 1.0)));
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(78.78, 67.98, -4.2, -0.9);
   if(_GLF_DEAD(false))
    {
     _GLF_color = sign(_GLF_IDENTITY(vec4(681.248, 5309.1490, -4.9, 4.1), clamp(vec4(681.248, 5309.1490, -4.9, 4.1), _GLF_IDENTITY(vec4(681.248, 5309.1490, -4.9, 4.1), mix(vec4(_GLF_FUZZED(0.4), _GLF_FUZZED(-1.9), _GLF_FUZZED(-73.84), _GLF_FUZZED(612.977)), vec4(_GLF_IDENTITY((vec4(681.248, 5309.1490, -4.9, 4.1))[0], clamp((vec4(681.248, 5309.1490, -4.9, 4.1))[0], _GLF_IDENTITY((vec4(681.248, 5309.1490, -4.9, 4.1))[0], mix(float((vec4(681.248, 5309.1490, -4.9, 4.1))[0]), float(_GLF_FUZZED(-296.168)), bool(false))), (vec4(681.248, 5309.1490, -4.9, 4.1))[0])), (vec4(681.248, 5309.1490, -4.9, 4.1))[1], (vec4(681.248, 5309.1490, -4.9, 4.1))[2], (vec4(681.248, 5309.1490, -4.9, 4.1))[3]), bvec4(true, true, true, true))), _GLF_IDENTITY(vec4(681.248, 5309.1490, -4.9, 4.1), vec4(mat2x4(vec4(681.248, 5309.1490, -4.9, 4.1), 0.0, 1.0, 1.0, 0.0))))));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
    {
     _GLF_color = vec4(-3347.2135, -2621.5091, 12.88, -37.87);
    }
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = (4.8 * vec4(0.9, 653.033, -936.518, -9.1));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-9.7, -719.204, 3.4, -890.858);
  }
 if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))) || false)))
  {
   _GLF_color = asin(mat3x4(mat3x2(7359.5659, -893.793, -3.7, -484.035, 4.0, -8119.9158))[1]);
  }
 float refh = _GLF_IDENTITY(texture(tex, _GLF_IDENTITY(coord, clamp(_GLF_IDENTITY(coord, _GLF_IDENTITY(clamp(_GLF_IDENTITY(coord, vec2(mat4(coord, _GLF_IDENTITY(0.0, max(0.0, 0.0)), 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, float(mat3x4(1.0, 1.0, 1.0, 1.0, _GLF_ZERO(0.0, injectionSwitch.x), 0.0, tan(0.0), 0.0, 1.0, 0.0, length(0.0), 0.0))), 1.0, 1.0, 0.0, 1.0))), coord, _GLF_IDENTITY(coord, mat2(1.0) * (coord))), vec2(mat4x3(clamp(_GLF_IDENTITY(coord, vec2(mat4(coord, _GLF_IDENTITY(0.0, max(_GLF_IDENTITY(0.0, float(mat3x2(0.0, 0.0, 0.0, 1.0, 1.0, _GLF_IDENTITY(dot(vec4(1.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 0.0, 0.0)), dot(vec4(1.0, 0.0, 1.0, 1.0), vec4(0.0, 1.0, 0.0, 0.0)))))), 0.0)), 1.0, 1.0, _GLF_IDENTITY(1.0, mix(float(1.0), float(_GLF_FUZZED(39.38)), bool(false))), 1.0, 1.0, 1.0, 0.0, 1.0, _GLF_IDENTITY(1.0, float(mat3x4(1.0, 1.0, 1.0, 1.0, _GLF_ZERO(0.0, _GLF_IDENTITY(injectionSwitch, cos(vec2(0.0, 0.0)) * (_GLF_IDENTITY(injectionSwitch, mix(vec2(_GLF_FUZZED(-56.49), (injectionSwitch)[1]), vec2((injectionSwitch)[0], _GLF_FUZZED(8141.3181)), bvec2(true, false))))).x), 0.0, tan(0.0), 0.0, 1.0, 0.0, length(0.0), 0.0))), 1.0, 1.0, 0.0, 1.0))), coord, coord), 0.0, 0.0, exp(0.0), log(1.0), 1.0, _GLF_IDENTITY(dot(vec3(_GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(1.0, 0.0)), dot(vec2(1.0, 0.0), vec2(1.0, 0.0))), 1.0, 0.0), vec3(0.0, 0.0, 1.0)), _GLF_IDENTITY(dot(vec3(_GLF_IDENTITY(_GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(_GLF_IDENTITY(1.0, min(_GLF_IDENTITY(1.0, 0.0 + (1.0)), 1.0)), 0.0)), (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? dot(vec2(1.0, 0.0), vec2(1.0, 0.0)) : _GLF_FUZZED(-84.58))), dot(vec2(1.0, 0.0), vec2(1.0, 0.0))), 1.0, 0.0), vec3(0.0, 0.0, 1.0)), mix(float(_GLF_FUZZED(-5.9)), float(dot(vec3(_GLF_IDENTITY(_GLF_IDENTITY(dot(vec2(1.0, 0.0), vec2(_GLF_IDENTITY(1.0, min(_GLF_IDENTITY(1.0, 0.0 + (1.0)), 1.0)), 0.0)), (_GLF_TRUE(true, (gl_FragCoord.y >= 0.0)) ? dot(vec2(1.0, 0.0), vec2(1.0, 0.0)) : _GLF_FUZZED(-84.58))), dot(vec2(1.0, 0.0), vec2(1.0, 0.0))), 1.0, 0.0), vec3(0.0, 0.0, 1.0))), bool(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)))))), 1.0, 1.0, 1.0, 0.0)))), coord, coord))), (_GLF_IDENTITY(_GLF_IDENTITY(texture(tex, _GLF_IDENTITY(coord, vec2(_GLF_IDENTITY(mat2x3(coord, tan(0.0), determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, _GLF_IDENTITY(1.0, 0.0 + (_GLF_IDENTITY(1.0, (1.0) + 0.0))), 1.0, 0.0, 1.0, 1.0, 0.0, _GLF_ONE(1.0, injectionSwitch.y))), 0.0, determinant(mat3(0.0, 0.0, 0.0, 0.0, 0.0, _GLF_IDENTITY(dot(vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 0.0, 0.0, 0.0)), dot(vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 0.0, 0.0, 0.0))), 0.0, log(1.0), 0.0))), (mat2x3(coord, tan(0.0), determinant(mat4(1.0, 0.0, 0.0, 0.0, 0.0, 1.0, 0.0, 0.0, 1.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, _GLF_ONE(1.0, injectionSwitch.y))), 0.0, determinant(mat3(0.0, 0.0, 0.0, 0.0, 0.0, _GLF_IDENTITY(dot(vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 0.0, 0.0, 0.0)), dot(vec4(0.0, 1.0, 1.0, 1.0), vec4(1.0, 0.0, 0.0, 0.0))), 0.0, log(1.0), 0.0)))) * mat2(1.0))))), max(texture(tex, coord), _GLF_IDENTITY(texture(tex, coord), _GLF_IDENTITY((texture(tex, coord)) - sqrt(vec4(0.0, 0.0, 0.0, 0.0)), max(_GLF_IDENTITY((texture(tex, coord)) - sqrt(vec4(0.0, 0.0, 0.0, 0.0)), (false ? _GLF_FUZZED(vec4(-1.6, 3.7, -2.1, 3258.0277)) : (texture(tex, coord)) - sqrt(vec4(0.0, 0.0, 0.0, 0.0)))), (texture(tex, coord)) - sqrt(vec4(0.0, 0.0, 0.0, 0.0))))))), vec4(mat3(_GLF_IDENTITY(texture(tex, _GLF_IDENTITY(coord, vec2(coord[0], _GLF_IDENTITY(coord[1], min(_GLF_IDENTITY(coord, (coord) * mat2(1.0))[1], coord[1]))))), _GLF_IDENTITY(clamp(texture(tex, coord), texture(tex, coord), texture(tex, coord)), vec4(mat2x4(clamp(texture(tex, coord), texture(tex, coord), texture(tex, _GLF_IDENTITY(coord, (_GLF_IDENTITY(coord, max(coord, coord))) - vec2(0.0, 0.0)))), abs(0.0), 1.0, 1.0, 0.0)))), 1.0, 1.0, _GLF_IDENTITY(0.0, (0.0) + _GLF_IDENTITY(0.0, min(_GLF_IDENTITY(0.0, clamp(0.0, 0.0, 0.0)), _GLF_IDENTITY(0.0, mix(float(_GLF_FUZZED(-552.792)), float(0.0), bool(true)))))), 0.0, 0.0)))) / vec4(1.0, 1.0, 1.0, 1.0)).y;
 coord -= uvstep;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(dot(vec3(0.0, sin(0.0), 1.0), vec3(1.0, 1.0, 0.0)), dot(vec3(0.0, sin(_GLF_IDENTITY(0.0, (_GLF_IDENTITY(0.0, max(0.0, 0.0))) / 1.0)), _GLF_IDENTITY(1.0, min(_GLF_IDENTITY(1.0, (true ? 1.0 : _GLF_FUZZED(refh))), 1.0))), vec3(1.0, 1.0, 0.0)))))))
  {
   _GLF_color = log((vec4(39.81, -91.92, 9.5, 5845.3714) * vec4(4.4, -83.15, -6.3, -441.382)).xyyy);
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(injectionSwitch.x, abs(0.0) + (injectionSwitch.x)) > injectionSwitch.y))))
  {
   _GLF_color = dFdy(degrees(vec4(-946.450, 6572.3071, -6.7, 18.39)));
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-4028.3269, -19.58, -1.0, -498.690);
  }
 refh += slope;
 if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
  {
   _GLF_color = vec4(-66.38, -19.16, 3.4, -9.7);
  }
 float h = texture(tex, _GLF_IDENTITY(coord, max(coord, _GLF_IDENTITY(coord, (coord) * _GLF_IDENTITY(vec2(1.0, 1.0), mix(vec2(_GLF_FUZZED(1304.7158), _GLF_FUZZED((_GLF_IDENTITY(true, (true) && _GLF_TRUE(true, (gl_FragCoord.y >= 0.0))) ? -2.1 : _GLF_IDENTITY(-4063.9723, mix(float(_GLF_FUZZED(2524.2746)), float(_GLF_IDENTITY(-4063.9723, mix(float(-4063.9723), float(_GLF_FUZZED(7.6)), bool(false)))), bool(true)))))), vec2(_GLF_IDENTITY((vec2(1.0, 1.0))[0], min((vec2(1.0, 1.0))[0], _GLF_IDENTITY((vec2(1.0, 1.0))[0], 1.0 * ((vec2(1.0, 1.0))[0])))), (vec2(1.0, 1.0))[1]), bvec2(true, _GLF_TRUE(true, (gl_FragCoord.y >= 0.0))))))))).y;
 while(h < refh && i < 32)
  {
   coord -= _GLF_IDENTITY(uvstep, vec2(0.0, 0.0) + (uvstep));
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-55.38, 954.485, 74.50, 0.3);
    }
   if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < log(1.0))), false || (_GLF_FALSE(false, (gl_FragCoord.y < log(1.0)))))))
    {
     _GLF_color = vec4(-6.8, 659.491, 5.5, -6.8);
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-4754.2898, -45.28, -8852.8526, 709.833);
    }
   refh += slope;
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       _GLF_color = vec4(9.0, 620.903, 3515.9169, 7.8);
      }
     _GLF_IDENTITY(_GLF_color = vec4(-8879.5209, 8.9, -2.0, 3.3), vec4(1.0, 1.0, 1.0, 1.0) * (_GLF_color = vec4(-8879.5209, 8.9, -2.0, 3.3)));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < _GLF_IDENTITY(_GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, (0.0) + 0.0), 0.0)), clamp(_GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, (0.0) + 0.0), 0.0)), _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, (0.0) + 0.0), 0.0)), _GLF_IDENTITY(0.0, clamp(0.0, _GLF_IDENTITY(0.0, (0.0) + 0.0), 0.0))))))))
    {
     _GLF_IDENTITY(_GLF_color = mat2x4(-62.61, -5.5, 3.1, 59.56, -295.853, 5335.3146, 1.0, -9031.3845)[0], (_GLF_color = mat2x4(-62.61, -5.5, 3.1, 59.56, -295.853, 5335.3146, 1.0, -9031.3845)[_GLF_IDENTITY(0, ~ (~ (0)))]) - vec4(0.0, 0.0, 0.0, 0.0));
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = unpackSnorm4x8(11430u);
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-0.9, -3.9, -2.9, 4.7);
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = max(vec4(931.386, 3.9, -12.74, 5.4), 4.0);
        }
      }
     if(_GLF_DEAD(_GLF_IDENTITY(false, _GLF_IDENTITY(false || (false), false || (false || (false))))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(9.0, 2190.0151, 75.67, -499.691);
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-7.7, 62.07, -9.0, -23.62);
          }
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = (vec4(-1834.5382, 436.264, -312.689, -6.8) / 2.0);
        }
       _GLF_color = cosh(vec4(5303.3761, -6.6, 4693.4467, 4606.7802));
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
          {
           _GLF_color = cosh(vec4(-46.22, 2.7, 6.2, -5.5));
          }
         _GLF_color = vec4(5447.1765, 7.2, 695.124, 0.4);
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(7632.2169, -9.4, -2.2, -704.133);
          }
         _GLF_IDENTITY(_GLF_color = vec4(-1.6, -7.1, -669.880, -356.023), vec4(0.0, 0.0, 0.0, 0.0) + (_GLF_color = vec4(-1.6, -7.1, -669.880, -356.023)));
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_color = vec4(-63.57, 7.7, 648.064, -5611.2499);
          }
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = mat3x4(8.1, -95.15, -4656.6458, -461.649, 6.6, 1.4, 0.8, -7.9, -4.1, -0.3, 576.474, 86.26)[0];
        }
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(215.324, -18.44, 461.176, -784.584);
          }
         _GLF_color = (mat2x4(6047.7626, -79.56, 1.1, _GLF_IDENTITY(2829.1030, clamp(2829.1030, 2829.1030, _GLF_IDENTITY(2829.1030, (2829.1030) - 0.0))), -353.098, -8.3, -96.95, 5.8) * vec2(9.8, 8.7));
        }
       if(_GLF_DEAD(false))
        {
         _GLF_color = atan(_GLF_IDENTITY(vec4(52.63, -48.01, -12.95, 83.42), _GLF_IDENTITY(vec4(1.0, 1.0, 1.0, 1.0), (vec4(1.0, 1.0, 1.0, 1.0)) - vec4(0.0, 0.0, 0.0, 0.0)) * (vec4(52.63, -48.01, -12.95, 83.42))), vec4(-3.0, -1627.4781, 6.3, 8.3));
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(47.56, 7294.1219, -908.062, -6.2);
          }
        }
      }
     _GLF_color = dFdx(vec4(4599.4761, -439.609, 6.8, 34.93));
    }
   h = texture(tex, coord).y;
   if(_GLF_DEAD(_GLF_FALSE(_GLF_IDENTITY(false, true && (false)), (_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x, 1.0 * (_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x)), min(_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (_GLF_IDENTITY(injectionSwitch.x < injectionSwitch.y, ! (! (injectionSwitch.x < injectionSwitch.y))))) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x, 1.0 * (_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x)), _GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x, (_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x) - 0.0), 1.0 * (_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x)), mix(float(_GLF_IDENTITY(_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x, 1.0 * (_GLF_IDENTITY(gl_FragCoord, (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? gl_FragCoord : _GLF_FUZZED(vec4(refh, -8.7, uvstep)))).x))), float(_GLF_FUZZED(-1.6)), bool(false))))) < length(_GLF_IDENTITY(sin(_GLF_IDENTITY(vec4(0.0, 0.0, 0.0, 0.0), mix(vec4(_GLF_FUZZED(-480.742), (vec4(0.0, 0.0, 0.0, 0.0))[1], (vec4(0.0, 0.0, 0.0, 0.0))[2], (vec4(0.0, 0.0, 0.0, 0.0))[3]), vec4((vec4(0.0, 0.0, 0.0, 0.0))[0], _GLF_FUZZED(float(23362)), _GLF_FUZZED(-7.5), _GLF_FUZZED(831.297)), bvec4(_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)), false, false, false)))), clamp(sin(vec4(_GLF_IDENTITY(0.0, 1.0 * (0.0)), 0.0, 0.0, 0.0)), _GLF_IDENTITY(_GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), min(sin(vec4(0.0, 0.0, 0.0, 0.0)), sin(vec4(0.0, 0.0, 0.0, 0.0)))), clamp(_GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), min(sin(vec4(0.0, 0.0, 0.0, 0.0)), sin(vec4(0.0, 0.0, 0.0, 0.0)))), _GLF_IDENTITY(sin(vec4(_GLF_IDENTITY(0.0, float(mat2x3(0.0, _GLF_ONE(1.0, injectionSwitch.y), 0.0, 1.0, length(0.0), round(length(normalize(1.0)))))), 0.0, 0.0, 0.0)), min(sin(vec4(0.0, 0.0, 0.0, 0.0)), sin(vec4(0.0, 0.0, 0.0, 0.0)))), _GLF_IDENTITY(_GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), min(sin(_GLF_IDENTITY(vec4(0.0, 0.0, 0.0, 0.0), vec4(1.0, 1.0, 1.0, 1.0) * (vec4(0.0, 0.0, 0.0, 0.0)))), sin(vec4(0.0, 0.0, 0.0, 0.0)))), clamp(_GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), min(sin(vec4(0.0, 0.0, 0.0, 0.0)), sin(vec4(0.0, 0.0, 0.0, 0.0)))), _GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), min(sin(vec4(0.0, 0.0, 0.0, 0.0)), sin(vec4(0.0, 0.0, 0.0, _GLF_IDENTITY(0.0, (_GLF_IDENTITY(true, bool(bool(true))) ? _GLF_IDENTITY(0.0, float(vec2(0.0, 0.0))) : _GLF_FUZZED(slope))))))), _GLF_IDENTITY(_GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), min(sin(vec4(0.0, 0.0, 0.0, 0.0)), _GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), mix(vec4(_GLF_IDENTITY((sin(vec4(0.0, 0.0, 0.0, 0.0)))[0], 0.0 + ((sin(vec4(0.0, 0.0, 0.0, 0.0)))[0])), _GLF_FUZZED(241.006), (sin(vec4(0.0, 0.0, 0.0, 0.0)))[2], _GLF_FUZZED(38.68)), vec4(_GLF_FUZZED(-5019.8232), (sin(vec4(0.0, 0.0, 0.0, 0.0)))[1], _GLF_FUZZED(-7.4), (sin(vec4(0.0, 0.0, 0.0, 0.0)))[3]), bvec4(false, _GLF_TRUE(true, (gl_FragCoord.y >= 0.0)), false, true))))), max(_GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), min(sin(vec4(0.0, 0.0, 0.0, 0.0)), sin(vec4(0.0, 0.0, 0.0, 0.0)))), _GLF_IDENTITY(sin(vec4(0.0, 0.0, 0.0, 0.0)), min(sin(vec4(0.0, 0.0, 0.0, 0.0)), sin(vec4(0.0, 0.0, 0.0, 0.0)))))))))), sin(vec4(0.0, 0.0, 0.0, 0.0)))))))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(44.20, 4.6, 4.8, -9.6);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(1.0, -851.440, 7452.3426, 45.60);
      }
     if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_IDENTITY(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)), (_GLF_FALSE(false, _GLF_IDENTITY((injectionSwitch.x > injectionSwitch.y), bool(bvec4((injectionSwitch.x > injectionSwitch.y), true, _GLF_TRUE(true, (gl_FragCoord.x >= 0.0)), true))))) || false)) || false)))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = abs(vec4(-6.6, 7.3, 2.0, -9.8));
        }
       _GLF_color = vec4(-6615.0238, -7855.1998, 0.5, 695.118);
      }
     _GLF_color = (vec4(1.1, 1.4, -651.937, -3.0) * -47.76);
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-8.7, -8250.1020, 6.6, 68.81);
        }
       _GLF_color = vec4(-7.4, -2822.5833, -2180.9542, -1676.5044);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(217.133, 92.69, 9397.3742, -929.730);
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(-22.87, -2.8, -98.53, -5.8);
      }
    }
   if(_GLF_IDENTITY(_GLF_DEAD(false), (_GLF_DEAD(false)) && true))
    {
     if(_GLF_DEAD(_GLF_IDENTITY(false, false || (false))))
      {
       _GLF_color = (372.037 , mat4(-948.564, 984.641, 6.9, 3.4, 17.47, -59.35, -607.172, 6.4, -669.063, -7472.5606, -718.522, 4.0, -14.49, -3.5, 894.177, -9041.3455))[2];
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(-5.7, 32.16, -89.76, -32.79);
        }
       _GLF_color = vec4(-7697.6574, _GLF_IDENTITY(vec2(-12.98, 79.04), mix(vec2((vec2(-12.98, 79.04))[0], _GLF_IDENTITY((vec2(-12.98, 79.04))[1], max(_GLF_IDENTITY(_GLF_IDENTITY((vec2(-12.98, 79.04))[1], max((vec2(-12.98, 79.04))[1], _GLF_IDENTITY((vec2(-12.98, 79.04))[1], (_GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) ? (vec2(-12.98, 79.04))[1] : _GLF_FUZZED(slope))))), ((vec2(-12.98, 79.04))[_GLF_IDENTITY(1, clamp(1, _GLF_IDENTITY(1, max(1, 1)), 1))]) - 0.0), (_GLF_IDENTITY(vec2(-12.98, 79.04), (vec2(-12.98, 79.04)) / vec2(1.0, 1.0)))[1]))), vec2(_GLF_FUZZED(-94.99), _GLF_IDENTITY(_GLF_FUZZED((90.15)), clamp(_GLF_FUZZED((90.15)), _GLF_FUZZED((90.15)), _GLF_FUZZED((90.15))))), bvec2(false, false))), 7.8);
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
          {
           _GLF_IDENTITY(_GLF_color = atanh(vec4(4917.7678, -55.09, 9.7, 2682.0244)), (_GLF_IDENTITY(_GLF_color = atanh(vec4(4917.7678, -55.09, 9.7, 2682.0244)), (true ? _GLF_color = atanh(vec4(4917.7678, _GLF_IDENTITY(-55.09, mix(float(-55.09), float(_GLF_FUZZED(vec2(7.3, 2299.5489).t)), bool(false))), 9.7, 2682.0244)) : _GLF_FUZZED(_GLF_color)))) * abs(vec4(1.0, 1.0, 1.0, 1.0)));
           if(_GLF_DEAD(false))
            {
             _GLF_color = vec4(40.73, -8695.8498, 3721.3631, 457.781);
            }
          }
         _GLF_color = asinh(vec4(6.9, 78.40, -879.683, 2.3));
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = normalize(vec4(-7.2, -5139.2221, 2.0, -20.13));
        }
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = vec4(0.3, 1.0, -7.0, -327.505);
        }
       _GLF_IDENTITY(_GLF_color = radians(vec4(-3137.1073, -8437.1589, -347.836, -5.1)), (_GLF_IDENTITY(_GLF_color = radians(vec4(-3137.1073, -8437.1589, -347.836, -5.1)), _GLF_IDENTITY((_GLF_color = radians(vec4(-3137.1073, -8437.1589, -347.836, -5.1))), ((_GLF_color = radians(vec4(-3137.1073, -8437.1589, -347.836, -5.1)))) * vec4(1.0, 1.0, 1.0, 1.0)) - vec4(0.0, 0.0, 0.0, 0.0))) / vec4(1.0, 1.0, 1.0, 1.0));
      }
     _GLF_color = vec4(45.09, _GLF_IDENTITY(-17.09, min(-17.09, -17.09)), -9.0, _GLF_IDENTITY(-6856.5938, mix(float(-6856.5938), float(_GLF_FUZZED(411.378)), bool(false))));
     if(_GLF_DEAD(false))
      {
       _GLF_color = exp(vec4(-8737.5510, -6.1, -962.739, 9888.5413));
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = smoothstep(vec4(-168.864, -6504.6415, 9459.2256, -6.6), mod(vec4(-1.2, 99.84, -0.1, 409.145), -6.0), round(vec4(-11.15, -1.4, 71.90, 4834.1815)));
    }
   if(_GLF_DEAD(_GLF_IDENTITY(false, true && (false))))
    {
     _GLF_color = vec4(-20.79, 1.4, -8968.2205, _GLF_IDENTITY(6.2, mix(float(6.2), float(_GLF_FUZZED(-207.218)), bool(false))));
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       _GLF_color = vec4(9.4, 5.4, 202.320, 598.891);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = vec4(-1.6, -57.65, 33.82, -495.060);
        }
      }
     _GLF_color = asin(vec4(-73.78, 1.1, 9.1, 48.61));
    }
   if(_GLF_DEAD(_GLF_IDENTITY(false, ! (_GLF_IDENTITY(! (_GLF_IDENTITY(false, true && (false))), true && (! (_GLF_IDENTITY(false, true && (false)))))))))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = vec4(76.06, -2310.8477, _GLF_IDENTITY(-9790.4686, mix(float(_GLF_IDENTITY(-9790.4686, float(mat2(-9790.4686, 0.0, 1.0, 0.0)))), float(_GLF_FUZZED(437.508)), bool(_GLF_IDENTITY(false, bool(bvec3(false, true, false)))))), -1411.2895);
      }
     _GLF_IDENTITY(_GLF_color = vec4(1274.4365, 523.553, 4.9, -7604.6509), (_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y)) ? _GLF_FUZZED(vec4(9528.7715, -630.669, -576.258, -6.2)) : _GLF_color = vec4(1274.4365, 523.553, 4.9, -7604.6509)));
     if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(74.50, 2.0, 7352.6495, 93.12);
        }
       _GLF_color = vec4(-9.0, -80.70, -268.467, -418.672);
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.x < 0.0))))
        {
         _GLF_color = vec4(1.1, 6572.2598, 434.073, 413.348);
        }
       _GLF_color = floor(smoothstep(vec4(37.45, -333.416, -66.43, -28.91), vec4(999.259, -9.1, -2.9, 2169.2376), vec4(599.238, 8571.6285, 168.448, _GLF_IDENTITY(-593.506, max(-593.506, -593.506)))));
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-16.96, 8.7, 4817.1224, 314.398);
        }
       _GLF_IDENTITY(_GLF_color = step(_GLF_IDENTITY(sinh(vec4(5974.2174, 10.89, 5.1, _GLF_IDENTITY(-75.60, clamp(-75.60, _GLF_IDENTITY(-75.60, (-75.60) / 1.0), _GLF_IDENTITY(-75.60, max(-75.60, _GLF_IDENTITY(-75.60, 0.0 + (_GLF_IDENTITY(-75.60, 1.0 * (-75.60)))))))))), _GLF_IDENTITY(mat4(1.0) * (sinh(vec4(5974.2174, 10.89, 5.1, _GLF_IDENTITY(-75.60, clamp(-75.60, _GLF_IDENTITY(-75.60, (-75.60) / 1.0), -75.60))))), (_GLF_IDENTITY(true, ! (! (true))) ? mat4(1.0) * (sinh(vec4(5974.2174, 10.89, 5.1, _GLF_IDENTITY(-75.60, clamp(-75.60, _GLF_IDENTITY(-75.60, (-75.60) / 1.0), -75.60))))) : _GLF_FUZZED(vec4(48.56, -7480.2771, 158.260, 8.5))))), _GLF_IDENTITY(_GLF_IDENTITY(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))), _GLF_IDENTITY(vec4(mat3(_GLF_IDENTITY(_GLF_IDENTITY(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))), clamp(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))), intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))), intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))))), (intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351))))) / vec4(1.0, 1.0, 1.0, 1.0)), 1.0, 1.0, 1.0, sqrt(1.0), 1.0)), (false ? _GLF_IDENTITY(_GLF_FUZZED(_GLF_color), _GLF_IDENTITY(vec4(_GLF_IDENTITY(mat4x3(_GLF_FUZZED(_GLF_color), length(vec3(0.0, 0.0, 0.0)), 1.0, 0.0, 0.0, 0.0, 1.0, _GLF_IDENTITY(0.0, (0.0) / 1.0), 1.0), (true ? mat4x3(_GLF_FUZZED(_GLF_color), length(vec3(0.0, 0.0, 0.0)), 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0) : _GLF_FUZZED((- mat4x3(251.324, 9785.1555, -9.0, 3.9, -5.6, -3.4, -74.05, -0.4, 0.7, -3556.3354, -237.375, -7.8)))))), vec4(0.0, 0.0, 0.0, 0.0) + (vec4(_GLF_IDENTITY(mat4x3(_GLF_FUZZED(_GLF_color), length(vec3(0.0, 0.0, 0.0)), 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0), (true ? mat4x3(_GLF_FUZZED(_GLF_color), length(vec3(0.0, 0.0, 0.0)), 1.0, 0.0, 0.0, 0.0, 1.0, 0.0, 1.0) : _GLF_FUZZED((- mat4x3(251.324, 9785.1555, -9.0, 3.9, -5.6, _GLF_IDENTITY(-3.4, mix(float(_GLF_FUZZED(-175.428)), float(_GLF_IDENTITY(-3.4, (_GLF_IDENTITY(-3.4, float(mat3x4(-3.4, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0, 0.0, 1.0, 1.0)))) - 0.0)), bool(_GLF_TRUE(true, (gl_FragCoord.y >= _GLF_IDENTITY(dot(vec2(0.0, 0.0), vec2(1.0, 1.0)), dot(vec2(0.0, 0.0), vec2(1.0, 1.0)))))))), -74.05, -0.4, 0.7, -3556.3354, -237.375, -7.8))))))))) : _GLF_IDENTITY(vec4(_GLF_IDENTITY(mat3(_GLF_IDENTITY(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))), (intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351))))) / vec4(1.0, 1.0, 1.0, 1.0)), 1.0, 1.0, 1.0, sqrt(1.0), 1.0), (mat3(_GLF_IDENTITY(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))), (intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351))))) / vec4(1.0, 1.0, 1.0, 1.0)), 1.0, 1.0, 1.0, sqrt(1.0), 1.0)) / mat3(1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0, 1.0))), clamp(vec4(mat3(_GLF_IDENTITY(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (_GLF_IDENTITY(-62351, int(_GLF_ZERO(0.0, injectionSwitch.x)) ^ (-62351)))), -62351)))), (intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351))))) / vec4(1.0, 1.0, 1.0, 1.0)), 1.0, 1.0, 1.0, sqrt(1.0), 1.0)), vec4(mat3(_GLF_IDENTITY(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, _GLF_IDENTITY((-62351) | (-62351), 0 ^ (_GLF_IDENTITY((-62351) | (_GLF_IDENTITY(-62351, max(-62351, -62351))), ((-62351) | (-62351)) - 0)))), -62351)))), (intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351))))) / vec4(1.0, 1.0, 1.0, _GLF_IDENTITY(1.0, _GLF_IDENTITY((_GLF_IDENTITY(1.0, mix(float(_GLF_IDENTITY(_GLF_IDENTITY(1.0, mix(float(_GLF_IDENTITY(1.0, (1.0) / 1.0)), float(_GLF_FUZZED(-39.31)), bool(false))), max(1.0, 1.0))), float(_GLF_FUZZED(-71.94)), bool(false)))), ((_GLF_IDENTITY(1.0, mix(float(_GLF_IDENTITY(1.0, max(1.0, 1.0))), float(_GLF_FUZZED(-71.94)), bool(false))))) - 0.0) + 0.0))), 1.0, 1.0, 1.0, _GLF_IDENTITY(sqrt(1.0), min(sqrt(1.0), sqrt(1.0))), 1.0)), vec4(mat3(_GLF_IDENTITY(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))), (intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (_GLF_IDENTITY(-62351, (-62351) | (ivec4(-79382, 7368, 55177, 87145).r & 0)))), -62351))))) / vec4(1.0, 1.0, 1.0, 1.0)), 1.0, 1.0, 1.0, sqrt(1.0), 1.0))))))), clamp(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (_GLF_IDENTITY(-62351, int(ivec4(_GLF_IDENTITY(-62351, (-62351) - 0), 0, int(_GLF_ZERO(0.0, injectionSwitch.x)), 0))))), _GLF_IDENTITY(-62351, _GLF_IDENTITY(int(ivec2(_GLF_IDENTITY(-62351, (-62351) / 1), 0)), (int(ivec2(_GLF_IDENTITY(-62351, (-62351) / 1), 0))) | 0)))))), intBitsToFloat(ivec4(-75719, -51700, _GLF_IDENTITY(83423, int(_GLF_IDENTITY(ivec3(83423, 1, 1), _GLF_IDENTITY((ivec3(83423, 1, 1)) + ivec3(0, 0, 0), (true ? _GLF_IDENTITY((ivec3(83423, 1, 1)) + ivec3(0, 0, 0), ~ (~ ((ivec3(83423, 1, 1)) + ivec3(0, 0, _GLF_IDENTITY(0, (_GLF_IDENTITY(0, (0) * 1)) - 0))))) : _GLF_FUZZED(ivec3(-67456, -55355, 50010))))))), _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (_GLF_IDENTITY(-62351, (true ? _GLF_IDENTITY(_GLF_IDENTITY(-62351, ~ (~ (-62351))), ((1 << _GLF_IDENTITY(int(1), int(1))) >> _GLF_IDENTITY(int(1), _GLF_IDENTITY(int(1), max(int(1), int(1))))) * (_GLF_IDENTITY(_GLF_IDENTITY(-62351, ~ (~ (-62351))), min(_GLF_IDENTITY(-62351, ~ (~ (-62351))), _GLF_IDENTITY(-62351, ~ (~ (-62351))))))) : _GLF_FUZZED(sign(-37552)))))), -62351)))), intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351))))))), (_GLF_color = step(sinh(vec4(5974.2174, 10.89, 5.1, _GLF_IDENTITY(-75.60, clamp(_GLF_IDENTITY(-75.60, max(_GLF_IDENTITY(-75.60, (_GLF_IDENTITY(-75.60, (false ? _GLF_FUZZED(h) : -75.60))) - log(1.0)), _GLF_IDENTITY(-75.60, _GLF_IDENTITY(max(-75.60, -75.60), (max(-75.60, -75.60)) / 1.0)))), _GLF_IDENTITY(_GLF_IDENTITY(-75.60, (-75.60) / 1.0), (-75.60) / 1.0), -75.60)))), _GLF_IDENTITY(_GLF_IDENTITY(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))), (intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351))))) / vec4(1.0, 1.0, 1.0, 1.0)), clamp(intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | _GLF_IDENTITY((-62351), ~ (~ ((-62351))))), -62351)))), intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(_GLF_IDENTITY(-62351, (-62351) | 0), min(_GLF_IDENTITY(_GLF_IDENTITY(-62351, (_GLF_IDENTITY(-62351, (-62351) | (_GLF_IDENTITY(-62351, (-62351) ^ _GLF_IDENTITY(0, (0) | (0)))))) | (-62351)), clamp(_GLF_IDENTITY(-62351, (_GLF_IDENTITY(-62351, (-62351) | (_GLF_IDENTITY(-62351, _GLF_IDENTITY((-62351), (_GLF_IDENTITY((-62351), int(ivec3((-62351), 0, 1)))) - int(_GLF_ZERO(0.0, injectionSwitch.x))) ^ 0)))) | (-62351)), _GLF_IDENTITY(-62351, (_GLF_IDENTITY(-62351, (-62351) | (_GLF_IDENTITY(-62351, (-62351) ^ 0)))) | (-62351)), _GLF_IDENTITY(-62351, (_GLF_IDENTITY(-62351, (-62351) | (_GLF_IDENTITY(-62351, (-62351) ^ 0)))) | (-62351)))), _GLF_IDENTITY(-62351, _GLF_IDENTITY(int(int(-62351)), (int(int(-62351))) >> 0)))))), intBitsToFloat(ivec4(-75719, -51700, 83423, _GLF_IDENTITY(-62351, min(_GLF_IDENTITY(-62351, (-62351) | (-62351)), -62351)))))))) + vec4(0.0, 0.0, 0.0, 0.0));
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, vec4(gl_FragCoord[0], gl_FragCoord[1], gl_FragCoord[2], gl_FragCoord[3])).x < 0.0))))
      {
       _GLF_color = vec4(58.52, -103.488, -358.428, _GLF_IDENTITY(495.557, max(495.557, 495.557)));
      }
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(false))
      {
       _GLF_color = atanh(vec4(-7.5, vec2(-6.3, 0.2), -0.1));
      }
     if(_GLF_DEAD(false))
      {
       _GLF_color = fract(fract(vec4(230.852, -431.013, -508.591, 6531.2449)));
      }
     if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))) && true)))
      {
       _GLF_color = vec4(63.08, -8943.6459, -4.8, _GLF_IDENTITY(-278.676, 1.0 * (_GLF_IDENTITY(-278.676, (-278.676) * 1.0))));
      }
     _GLF_color = vec4(_GLF_IDENTITY(-15.60, (-15.60) - 0.0), 6.5, 768.125, -7.0);
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = cosh(vec4(-865.687, -7146.7937, -729.890, 58.76));
    }
   if(_GLF_DEAD(false))
    {
     _GLF_color = (vec4(21.89, 0.0, 54.68, 6.1) / -645.977);
    }
   i ++;
   if(_GLF_DEAD(false))
    {
     _GLF_color = vec4(-270.566, 870.543, -3.5, -9.5);
    }
   if(_GLF_DEAD(false))
    {
     if(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(0.0, min(0.0, 0.0)))), true && (_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(0.0, min(0.0, 0.0)))), bool(bvec3(_GLF_FALSE(false, (gl_FragCoord.x < _GLF_IDENTITY(0.0, min(0.0, 0.0)))), true, true)))))))
      {
       _GLF_color = vec4(-9.4, -6.5, -5014.8126, _GLF_IDENTITY(-9.5, (-9.5) + _GLF_IDENTITY(dot(vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 1.0, 1.0, 0.0)), dot(vec4(0.0, 0.0, 0.0, 1.0), vec4(1.0, 1.0, 1.0, 0.0)))));
       if(_GLF_DEAD(false))
        {
         _GLF_color = vec4(-0.5, 7.3, -77.17, 7.8);
        }
      }
     _GLF_color = trunc(vec4(2.8, -953.837, -22.62, -6.4));
    }
   if(_GLF_IDENTITY(_GLF_DEAD(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, (false) || false)) && true), (_GLF_IDENTITY(false, (false) && true)) || _GLF_IDENTITY(false, ! (! (false)))), bool(bvec2(_GLF_IDENTITY(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, (false) || false)) && true), (_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), (_GLF_IDENTITY(false, (false) && true)) || _GLF_FALSE(false, (gl_FragCoord.x < 0.0)))) || _GLF_IDENTITY(false, ! (! (false)))), _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))), (_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, _GLF_IDENTITY((false), ! (_GLF_IDENTITY(! (_GLF_IDENTITY((false), ((false)) && true)), ! (! (! (_GLF_IDENTITY((false), ((false)) && true))))))) || false)) && true), (_GLF_IDENTITY(false, (false) && _GLF_IDENTITY(true, ! (! (true))))) || _GLF_IDENTITY(false, ! _GLF_IDENTITY((! (false)), ((! (false))) || false))), bool(bvec2(_GLF_IDENTITY(_GLF_IDENTITY(false, (_GLF_IDENTITY(_GLF_IDENTITY(false, bool(bool(false))), (false) || false)) && true), (_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), (_GLF_IDENTITY(false, (false) && true)) || _GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord, max(gl_FragCoord, gl_FragCoord)).x < 0.0)))) || _GLF_IDENTITY(false, ! (! (false)))), _GLF_TRUE(true, (_GLF_IDENTITY(injectionSwitch, (_GLF_TRUE(true, (gl_FragCoord.x >= 0.0)) ? injectionSwitch : _GLF_FUZZED(coord))).x < injectionSwitch.y))))), bool(bvec4(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, (false) || false)) && true), (_GLF_IDENTITY(false, (false) && true)) || _GLF_IDENTITY(false, ! (! (false)))), bool(bvec2(_GLF_IDENTITY(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, (false) || false)) && true), (_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(false, (false) && true), bool(bvec2(_GLF_IDENTITY(false, (false) && true), _GLF_TRUE(true, (gl_FragCoord.x >= 0.0))))), (_GLF_IDENTITY(false, (false) && true)) || _GLF_FALSE(false, (gl_FragCoord.x < 0.0)))) || _GLF_IDENTITY(false, _GLF_IDENTITY(! (! (false)), ! (! (_GLF_IDENTITY(! (! (false)), false || (! (! (false))))))))), _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y))))), false, false, true)))) || false)), (_GLF_DEAD(_GLF_IDENTITY(false, (_GLF_IDENTITY(false, (false) && true)) || _GLF_IDENTITY(false, (false) || false)))) || false))
    {
     if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.y < 0.0, _GLF_TRUE(true, (injectionSwitch.x < injectionSwitch.y)) && (_GLF_IDENTITY(gl_FragCoord.y < 0.0, false || (gl_FragCoord.y < 0.0))))))))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(-45.12, 0.3, -45.94, -844.759);
          }
         _GLF_color = vec4(378.819, 1.3, 869.065, -47.57);
        }
       _GLF_color = vec4(_GLF_IDENTITY(7.2, max(7.2, 7.2)), -29.04, -1400.1697, 0.9);
      }
     _GLF_color = vec4(_GLF_IDENTITY(7938.4469, min(_GLF_IDENTITY(_GLF_IDENTITY(_GLF_IDENTITY(7938.4469, mix(float(_GLF_FUZZED(6.8)), float(7938.4469), bool(true))), min(7938.4469, _GLF_IDENTITY(7938.4469, mix(float(_GLF_FUZZED(8.7)), float(_GLF_IDENTITY(7938.4469, min(7938.4469, 7938.4469))), bool(true))))), (_GLF_IDENTITY(_GLF_IDENTITY(7938.4469, mix(float(_GLF_FUZZED(6.8)), float(7938.4469), bool(true))), min(7938.4469, 7938.4469))) - 0.0), 7938.4469)), 32.30, -4343.5644, -1830.6425);
     if(_GLF_DEAD(_GLF_FALSE(false, (_GLF_IDENTITY(gl_FragCoord.x < 0.0, bool(bvec2(gl_FragCoord.x < 0.0, false)))))))
      {
       if(_GLF_DEAD(false))
        {
         _GLF_color = (true ? vec4(-50.41, 2.5, 9.2, 990.122) : mod(vec4(-8.0, -9.5, 1568.6046, 16.31), vec4(-946.410, -3.2, -385.496, 857.950)));
        }
       _GLF_color = mix(vec4(-481.841, -6.8, -11.00, 7316.3525), vec4(-2.1, -3.9, 9091.6884, -580.661), bvec4(true, false, true, true));
      }
     if(_GLF_DEAD(false))
      {
       if(_GLF_DEAD(false))
        {
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(6.3, -5.0, -1124.1806, -0.0);
          }
         _GLF_color = vec4(2.3, 550.905, 290.431, -817.824);
         if(_GLF_DEAD(false))
          {
           _GLF_color = vec4(5945.3401, 8253.9231, -9.0, -97.77);
          }
        }
       _GLF_IDENTITY(_GLF_color = vec4(7.3, 1.9, 5754.0028, 9585.2980), (_GLF_color = vec4(7.3, 1.9, 5754.0028, 9585.2980)) / vec4(_GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y), _GLF_ONE(_GLF_IDENTITY(1.0, (true ? 1.0 : _GLF_FUZZED(refh))), injectionSwitch.y), _GLF_ONE(1.0, injectionSwitch.y)));
       if(_GLF_DEAD(false))
        {
         _GLF_color = ((-9.9 * -2036.7925) + ((mat3x4(77.14, 8292.5452, 5629.5302, -813.112, 1605.5559, 7.1, 30.62, 12.65, 463.125, -3.8, 930.958, 3898.7963) * vec3(-3494.4749, -1.0, 27.52)) / 6810.6379));
        }
      }
     if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
      {
       if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
        {
         _GLF_color = uintBitsToFloat(uvec4(101559u, 89433u, 167253u, 27506u));
        }
       _GLF_color = vec4(89.26, -2.5, -9774.2454, 8.4);
      }
     if(_GLF_IDENTITY(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < 0.0)))))), bool(bool(_GLF_DEAD(_GLF_IDENTITY(_GLF_FALSE(false, (gl_FragCoord.y < 0.0)), ! (! (_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))))))))
      {
       _GLF_color = vec4(-5.8, -98.12, 1.6, -72.99);
       if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
        {
         _GLF_color = (mat2x4(mat3(60.01, -399.780, -779.151, 3.8, 72.06, -6.0, -13.46, 790.969, -67.43)) * vec2(0.8, 1.5)).tqsq;
        }
      }
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (gl_FragCoord.y < 0.0))))
    {
     _GLF_color = _GLF_IDENTITY(vec4(-869.398, -72.77, 0.3, -164.788), mat4(1.0) * (vec4(-869.398, -72.77, 0.3, -164.788)));
    }
   if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > _GLF_IDENTITY(injectionSwitch.y, (injectionSwitch.y) - abs(0.0))))))
    {
     _GLF_color = vec4(-9382.7719, -3.4, 396.367, -6.1);
     if(_GLF_DEAD(false))
      {
       _GLF_IDENTITY(_GLF_color = vec4(80.59, 72.78, 4636.7562, -7.6), abs(vec4(0.0, 0.0, 0.0, 0.0)) + (_GLF_color = vec4(80.59, 72.78, 4636.7562, -7.6)));
      }
    }
  }
 if(_GLF_DEAD(_GLF_FALSE(false, (injectionSwitch.x > injectionSwitch.y))))
  {
   _GLF_color = vec4(-8.0, 19.49, 2.3, 9.8);
  }
 if(_GLF_DEAD(false))
  {
   _GLF_color = vec4(-8.6, 7698.8286, 2.5, -7660.6875);
  }
 _GLF_color = vec4(vec3(float(_GLF_IDENTITY(i, (i) - (0 << _GLF_IDENTITY(int(8), int(8))))) * (1.0 / _GLF_IDENTITY(32.0, (_GLF_IDENTITY(32.0, mix(float(32.0), float(_GLF_FUZZED(-7669.7757)), bool(false)))) / 1.0))), 1.0);
 if(_GLF_DEAD(false))
  {
   _GLF_color = tanh(step(3.5, vec4(-2.4, 8.1, 732.932, 938.225)));
  }
}
