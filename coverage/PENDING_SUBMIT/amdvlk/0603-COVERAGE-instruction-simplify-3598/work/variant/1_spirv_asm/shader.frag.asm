; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 149
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %93 %130
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "_GLF_global_loop_count"
               OpName %14 "arr"
               OpName %24 "a"
               OpName %27 "buf0"
               OpMemberName %27 0 "_GLF_uniform_int_values"
               OpName %29 ""
               OpName %93 "gl_FragCoord"
               OpName %130 "_GLF_color"
               OpDecorate %26 ArrayStride 16
               OpMemberDecorate %27 0 Offset 0
               OpDecorate %27 Block
               OpDecorate %29 DescriptorSet 0
               OpDecorate %29 Binding 0
               OpDecorate %93 BuiltIn FragCoord
               OpDecorate %130 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Private %6
          %8 = OpVariable %7 Private
          %9 = OpConstant %6 0
         %10 = OpTypeInt 32 0
         %11 = OpConstant %10 128
         %12 = OpTypeArray %6 %11
         %13 = OpTypePointer Private %12
         %14 = OpVariable %13 Private
         %15 = OpConstant %6 1
         %16 = OpConstantComposite %12 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15 %15
         %23 = OpTypePointer Function %6
         %25 = OpConstant %10 4
         %26 = OpTypeArray %6 %25
         %27 = OpTypeStruct %26
         %28 = OpTypePointer Uniform %27
         %29 = OpVariable %28 Uniform
         %30 = OpTypePointer Uniform %6
         %33 = OpConstant %6 127
         %39 = OpTypeBool
         %61 = OpConstant %6 10
         %86 = OpConstant %6 3
         %90 = OpTypeFloat 32
         %91 = OpTypeVector %90 4
         %92 = OpTypePointer Input %91
         %93 = OpVariable %92 Input
         %94 = OpConstant %10 1
         %95 = OpTypePointer Input %90
        %101 = OpConstant %6 2
        %129 = OpTypePointer Output %91
        %130 = OpVariable %129 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %24 = OpVariable %23 Function
               OpStore %8 %9
               OpStore %14 %16
               OpBranch %17
         %17 = OpLabel
               OpLoopMerge %19 %20 None
               OpBranch %18
         %18 = OpLabel
         %21 = OpLoad %6 %8
         %22 = OpIAdd %6 %21 %15
               OpStore %8 %22
               OpStore %24 %9
         %31 = OpAccessChain %30 %29 %9 %9
         %32 = OpLoad %6 %31
         %34 = OpExtInst %6 %1 SClamp %32 %9 %33
         %35 = OpAccessChain %7 %14 %34
         %36 = OpLoad %6 %35
         %37 = OpAccessChain %30 %29 %9 %9
         %38 = OpLoad %6 %37
         %40 = OpIEqual %39 %36 %38
               OpSelectionMerge %42 None
               OpBranchConditional %40 %41 %42
         %41 = OpLabel
         %43 = OpLoad %6 %24
         %44 = OpIAdd %6 %43 %15
               OpStore %24 %44
               OpBranch %42
         %42 = OpLabel
         %45 = OpAccessChain %30 %29 %9 %9
         %46 = OpLoad %6 %45
         %47 = OpExtInst %6 %1 SClamp %46 %9 %33
         %48 = OpAccessChain %7 %14 %47
         %49 = OpLoad %6 %48
         %50 = OpAccessChain %30 %29 %9 %9
         %51 = OpLoad %6 %50
         %52 = OpIEqual %39 %49 %51
               OpSelectionMerge %54 None
               OpBranchConditional %52 %53 %54
         %53 = OpLabel
               OpBranch %55
         %55 = OpLabel
               OpLoopMerge %57 %58 None
               OpBranch %59
         %59 = OpLabel
         %60 = OpLoad %6 %8
         %62 = OpSLessThan %39 %60 %61
               OpBranchConditional %62 %56 %57
         %56 = OpLabel
         %63 = OpLoad %6 %8
         %64 = OpIAdd %6 %63 %15
               OpStore %8 %64
               OpBranch %58
         %58 = OpLabel
               OpBranch %55
         %57 = OpLabel
         %65 = OpLoad %6 %24
         %66 = OpIAdd %6 %65 %15
               OpStore %24 %66
               OpBranch %54
         %54 = OpLabel
         %67 = OpAccessChain %30 %29 %9 %9
         %68 = OpLoad %6 %67
         %69 = OpExtInst %6 %1 SClamp %68 %9 %33
         %70 = OpAccessChain %7 %14 %69
         %71 = OpLoad %6 %70
         %72 = OpAccessChain %30 %29 %9 %9
         %73 = OpLoad %6 %72
         %74 = OpIEqual %39 %71 %73
               OpSelectionMerge %76 None
               OpBranchConditional %74 %75 %76
         %75 = OpLabel
         %77 = OpLoad %6 %24
         %78 = OpIAdd %6 %77 %15
               OpStore %24 %78
               OpBranch %76
         %76 = OpLabel
         %79 = OpLoad %6 %24
         %80 = OpIEqual %39 %79 %9
               OpSelectionMerge %82 None
               OpBranchConditional %80 %81 %82
         %81 = OpLabel
         %83 = OpAccessChain %30 %29 %9 %15
         %84 = OpLoad %6 %83
         %85 = OpExtInst %6 %1 SClamp %84 %9 %33
         %87 = OpAccessChain %30 %29 %9 %86
         %88 = OpLoad %6 %87
         %89 = OpAccessChain %7 %14 %85
               OpStore %89 %88
               OpBranch %82
         %82 = OpLabel
         %96 = OpAccessChain %95 %93 %94
         %97 = OpLoad %90 %96
         %98 = OpConvertFToS %6 %97
         %99 = OpAccessChain %30 %29 %9 %86
        %100 = OpLoad %6 %99
        %102 = OpAccessChain %30 %29 %9 %101
        %103 = OpLoad %6 %102
        %104 = OpAccessChain %30 %29 %9 %9
        %105 = OpLoad %6 %104
        %106 = OpISub %6 %103 %105
        %107 = OpExtInst %6 %1 SClamp %98 %100 %106
        %108 = OpExtInst %6 %1 SClamp %107 %9 %33
        %109 = OpAccessChain %7 %14 %108
        %110 = OpLoad %6 %109
        %111 = OpAccessChain %30 %29 %9 %86
        %112 = OpLoad %6 %111
        %113 = OpIEqual %39 %110 %112
               OpSelectionMerge %115 None
               OpBranchConditional %113 %114 %115
        %114 = OpLabel
               OpReturn
        %115 = OpLabel
               OpBranch %20
         %20 = OpLabel
        %117 = OpLoad %6 %8
        %118 = OpSLessThan %39 %117 %61
               OpBranchConditional %118 %17 %19
         %19 = OpLabel
        %119 = OpAccessChain %30 %29 %9 %15
        %120 = OpLoad %6 %119
        %121 = OpExtInst %6 %1 SClamp %120 %9 %33
        %122 = OpAccessChain %7 %14 %121
        %123 = OpLoad %6 %122
        %124 = OpAccessChain %30 %29 %9 %9
        %125 = OpLoad %6 %124
        %126 = OpIEqual %39 %123 %125
               OpSelectionMerge %128 None
               OpBranchConditional %126 %127 %144
        %127 = OpLabel
        %131 = OpAccessChain %30 %29 %9 %9
        %132 = OpLoad %6 %131
        %133 = OpConvertSToF %90 %132
        %134 = OpAccessChain %30 %29 %9 %86
        %135 = OpLoad %6 %134
        %136 = OpConvertSToF %90 %135
        %137 = OpAccessChain %30 %29 %9 %86
        %138 = OpLoad %6 %137
        %139 = OpConvertSToF %90 %138
        %140 = OpAccessChain %30 %29 %9 %9
        %141 = OpLoad %6 %140
        %142 = OpConvertSToF %90 %141
        %143 = OpCompositeConstruct %91 %133 %136 %139 %142
               OpStore %130 %143
               OpBranch %128
        %144 = OpLabel
        %145 = OpAccessChain %30 %29 %9 %86
        %146 = OpLoad %6 %145
        %147 = OpConvertSToF %90 %146
        %148 = OpCompositeConstruct %91 %147 %147 %147 %147
               OpStore %130 %148
               OpBranch %128
        %128 = OpLabel
               OpReturn
               OpFunctionEnd
