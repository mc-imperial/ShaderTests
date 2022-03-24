; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 143
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %88 %124
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "arr"
               OpName %14 "buf0"
               OpMemberName %14 0 "_GLF_uniform_float_values"
               OpName %16 ""
               OpName %40 "i"
               OpName %53 "buf1"
               OpMemberName %53 0 "_GLF_uniform_int_values"
               OpName %55 ""
               OpName %69 "a"
               OpName %85 "idx"
               OpName %88 "gl_FragCoord"
               OpName %124 "_GLF_color"
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 0
               OpDecorate %52 ArrayStride 16
               OpMemberDecorate %53 0 Offset 0
               OpDecorate %53 Block
               OpDecorate %55 DescriptorSet 0
               OpDecorate %55 Binding 1
               OpDecorate %88 BuiltIn FragCoord
               OpDecorate %124 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeInt 32 0
          %8 = OpConstant %7 9
          %9 = OpTypeArray %6 %8
         %10 = OpTypePointer Function %9
         %12 = OpConstant %7 2
         %13 = OpTypeArray %6 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpTypeInt 32 1
         %18 = OpConstant %17 0
         %19 = OpTypePointer Uniform %6
         %39 = OpTypePointer Function %17
         %41 = OpConstant %17 1
         %48 = OpConstant %17 3
         %49 = OpTypeBool
         %51 = OpConstant %7 4
         %52 = OpTypeArray %17 %51
         %53 = OpTypeStruct %52
         %54 = OpTypePointer Uniform %53
         %55 = OpVariable %54 Uniform
         %56 = OpConstant %17 2
         %57 = OpTypePointer Uniform %17
         %62 = OpTypePointer Function %6
         %77 = OpConstantTrue %49
         %80 = OpConstant %17 4
         %86 = OpTypeVector %6 4
         %87 = OpTypePointer Input %86
         %88 = OpVariable %87 Input
         %89 = OpConstant %7 1
         %90 = OpTypePointer Input %6
        %103 = OpConstant %17 8
        %123 = OpTypePointer Output %86
        %124 = OpVariable %123 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %11 = OpVariable %10 Function
         %40 = OpVariable %39 Function
         %69 = OpVariable %39 Function
         %85 = OpVariable %39 Function
        %111 = OpVariable %62 Function
         %20 = OpAccessChain %19 %16 %18 %18
         %21 = OpLoad %6 %20
         %22 = OpAccessChain %19 %16 %18 %18
         %23 = OpLoad %6 %22
         %24 = OpAccessChain %19 %16 %18 %18
         %25 = OpLoad %6 %24
         %26 = OpAccessChain %19 %16 %18 %18
         %27 = OpLoad %6 %26
         %28 = OpAccessChain %19 %16 %18 %18
         %29 = OpLoad %6 %28
         %30 = OpAccessChain %19 %16 %18 %18
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %19 %16 %18 %18
         %33 = OpLoad %6 %32
         %34 = OpAccessChain %19 %16 %18 %18
         %35 = OpLoad %6 %34
         %36 = OpAccessChain %19 %16 %18 %18
         %37 = OpLoad %6 %36
         %38 = OpCompositeConstruct %9 %21 %23 %25 %27 %29 %31 %33 %35 %37
               OpStore %11 %38
               OpStore %40 %41
               OpBranch %42
         %42 = OpLabel
               OpLoopMerge %44 %45 None
               OpBranch %46
         %46 = OpLabel
         %47 = OpLoad %17 %40
         %50 = OpSLessThan %49 %47 %48
               OpBranchConditional %50 %43 %44
         %43 = OpLabel
         %58 = OpAccessChain %57 %55 %18 %56
         %59 = OpLoad %17 %58
         %60 = OpAccessChain %19 %16 %18 %18
         %61 = OpLoad %6 %60
         %63 = OpAccessChain %62 %11 %59
         %64 = OpLoad %6 %63
         %65 = OpFAdd %6 %64 %61
         %66 = OpAccessChain %62 %11 %59
               OpStore %66 %65
               OpBranch %45
         %45 = OpLabel
         %67 = OpLoad %17 %40
         %68 = OpIAdd %17 %67 %41
               OpStore %40 %68
               OpBranch %42
         %44 = OpLabel
         %70 = OpAccessChain %57 %55 %18 %41
         %71 = OpLoad %17 %70
               OpStore %69 %71
               OpBranch %72
         %72 = OpLabel
               OpLoopMerge %74 %75 None
               OpBranch %76
         %76 = OpLabel
               OpBranchConditional %77 %73 %74
         %73 = OpLabel
         %78 = OpLoad %17 %69
         %79 = OpIAdd %17 %78 %41
               OpStore %69 %79
         %81 = OpSGreaterThanEqual %49 %78 %80
               OpSelectionMerge %83 None
               OpBranchConditional %81 %82 %83
         %82 = OpLabel
               OpBranch %74
         %83 = OpLabel
               OpBranch %75
         %75 = OpLabel
               OpBranch %72
         %74 = OpLabel
         %91 = OpAccessChain %90 %88 %89
         %92 = OpLoad %6 %91
         %93 = OpConvertFToS %17 %92
         %94 = OpAccessChain %57 %55 %18 %18
         %95 = OpLoad %17 %94
         %96 = OpAccessChain %57 %55 %18 %48
         %97 = OpLoad %17 %96
         %98 = OpAccessChain %57 %55 %18 %41
         %99 = OpLoad %17 %98
        %100 = OpISub %17 %97 %99
        %101 = OpExtInst %17 %1 SClamp %93 %95 %100
               OpStore %85 %101
        %102 = OpLoad %17 %85
        %104 = OpExtInst %17 %1 SClamp %102 %18 %103
        %105 = OpAccessChain %62 %11 %104
        %106 = OpLoad %6 %105
        %107 = OpLoad %17 %85
        %108 = OpAccessChain %57 %55 %18 %56
        %109 = OpLoad %17 %108
        %110 = OpIEqual %49 %107 %109
               OpSelectionMerge %113 None
               OpBranchConditional %110 %112 %116
        %112 = OpLabel
        %114 = OpAccessChain %19 %16 %18 %41
        %115 = OpLoad %6 %114
               OpStore %111 %115
               OpBranch %113
        %116 = OpLabel
        %117 = OpAccessChain %19 %16 %18 %18
        %118 = OpLoad %6 %117
               OpStore %111 %118
               OpBranch %113
        %113 = OpLabel
        %119 = OpLoad %6 %111
        %120 = OpFOrdEqual %49 %106 %119
               OpSelectionMerge %122 None
               OpBranchConditional %120 %121 %138
        %121 = OpLabel
        %125 = OpAccessChain %57 %55 %18 %41
        %126 = OpLoad %17 %125
        %127 = OpConvertSToF %6 %126
        %128 = OpAccessChain %57 %55 %18 %18
        %129 = OpLoad %17 %128
        %130 = OpConvertSToF %6 %129
        %131 = OpAccessChain %57 %55 %18 %18
        %132 = OpLoad %17 %131
        %133 = OpConvertSToF %6 %132
        %134 = OpAccessChain %57 %55 %18 %41
        %135 = OpLoad %17 %134
        %136 = OpConvertSToF %6 %135
        %137 = OpCompositeConstruct %86 %127 %130 %133 %136
               OpStore %124 %137
               OpBranch %122
        %138 = OpLabel
        %139 = OpAccessChain %57 %55 %18 %18
        %140 = OpLoad %17 %139
        %141 = OpConvertSToF %6 %140
        %142 = OpCompositeConstruct %86 %141 %141 %141 %141
               OpStore %124 %142
               OpBranch %122
        %122 = OpLabel
               OpReturn
               OpFunctionEnd
