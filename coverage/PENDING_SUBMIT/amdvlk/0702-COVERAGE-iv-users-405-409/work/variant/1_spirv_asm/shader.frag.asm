; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 166
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %9 %114
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %9 "_GLF_color"
               OpName %14 "buf1"
               OpMemberName %14 0 "_GLF_uniform_int_values"
               OpName %16 ""
               OpName %25 "f"
               OpName %28 "buf0"
               OpMemberName %28 0 "_GLF_uniform_float_values"
               OpName %30 ""
               OpName %35 "i"
               OpName %48 "j"
               OpName %61 "k"
               OpName %90 "indexable"
               OpName %95 "l"
               OpName %108 "tmp"
               OpName %114 "gl_FragCoord"
               OpDecorate %9 Location 0
               OpDecorate %13 ArrayStride 16
               OpMemberDecorate %14 0 Offset 0
               OpDecorate %14 Block
               OpDecorate %16 DescriptorSet 0
               OpDecorate %16 Binding 1
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 0
               OpDecorate %114 BuiltIn FragCoord
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypeVector %6 4
          %8 = OpTypePointer Output %7
          %9 = OpVariable %8 Output
         %10 = OpTypeInt 32 1
         %11 = OpTypeInt 32 0
         %12 = OpConstant %11 3
         %13 = OpTypeArray %10 %12
         %14 = OpTypeStruct %13
         %15 = OpTypePointer Uniform %14
         %16 = OpVariable %15 Uniform
         %17 = OpConstant %10 0
         %18 = OpConstant %10 1
         %19 = OpTypePointer Uniform %10
         %24 = OpTypePointer Function %6
         %26 = OpConstant %11 4
         %27 = OpTypeArray %6 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %6
         %34 = OpTypePointer Function %10
         %46 = OpTypeBool
         %49 = OpConstant %10 2
         %72 = OpConstant %10 3
         %75 = OpTypeVector %6 2
         %76 = OpTypeMatrix %75 2
         %77 = OpConstant %6 1
         %78 = OpConstant %6 0
         %89 = OpTypePointer Function %76
        %107 = OpTypePointer Function %7
        %113 = OpTypePointer Input %7
        %114 = OpVariable %113 Input
        %115 = OpConstant %11 1
        %116 = OpTypePointer Input %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %25 = OpVariable %24 Function
         %35 = OpVariable %34 Function
         %48 = OpVariable %34 Function
         %61 = OpVariable %34 Function
         %90 = OpVariable %89 Function
         %95 = OpVariable %34 Function
        %108 = OpVariable %107 Function
         %20 = OpAccessChain %19 %16 %17 %18
         %21 = OpLoad %10 %20
         %22 = OpConvertSToF %6 %21
         %23 = OpCompositeConstruct %7 %22 %22 %22 %22
               OpStore %9 %23
         %32 = OpAccessChain %31 %30 %17 %17
         %33 = OpLoad %6 %32
               OpStore %25 %33
         %36 = OpAccessChain %19 %16 %17 %18
         %37 = OpLoad %10 %36
               OpStore %35 %37
               OpBranch %38
         %38 = OpLabel
               OpLoopMerge %40 %41 None
               OpBranch %42
         %42 = OpLabel
         %43 = OpLoad %10 %35
         %44 = OpAccessChain %19 %16 %17 %17
         %45 = OpLoad %10 %44
         %47 = OpSLessThan %46 %43 %45
               OpBranchConditional %47 %39 %40
         %39 = OpLabel
         %50 = OpAccessChain %19 %16 %17 %49
         %51 = OpLoad %10 %50
               OpStore %48 %51
               OpBranch %52
         %52 = OpLabel
               OpLoopMerge %54 %55 None
               OpBranch %56
         %56 = OpLabel
         %57 = OpLoad %10 %48
         %58 = OpAccessChain %19 %16 %17 %18
         %59 = OpLoad %10 %58
         %60 = OpSLessThan %46 %57 %59
               OpBranchConditional %60 %53 %54
         %53 = OpLabel
         %62 = OpAccessChain %19 %16 %17 %49
         %63 = OpLoad %10 %62
               OpStore %61 %63
               OpBranch %64
         %64 = OpLabel
               OpLoopMerge %66 %67 None
               OpBranch %68
         %68 = OpLabel
         %69 = OpLoad %10 %61
         %70 = OpLoad %10 %35
         %71 = OpSLessThan %46 %69 %70
               OpBranchConditional %71 %65 %66
         %65 = OpLabel
         %73 = OpAccessChain %31 %30 %17 %72
         %74 = OpLoad %6 %73
         %79 = OpCompositeConstruct %75 %74 %78
         %80 = OpCompositeConstruct %75 %78 %74
         %81 = OpCompositeConstruct %76 %79 %80
         %82 = OpLoad %10 %48
         %83 = OpLoad %10 %61
         %84 = OpAccessChain %19 %16 %17 %49
         %85 = OpLoad %10 %84
         %86 = OpAccessChain %19 %16 %17 %18
         %87 = OpLoad %10 %86
         %88 = OpExtInst %10 %1 SClamp %83 %85 %87
               OpStore %90 %81
         %91 = OpAccessChain %24 %90 %82 %88
         %92 = OpLoad %6 %91
         %93 = OpLoad %6 %25
         %94 = OpFAdd %6 %93 %92
               OpStore %25 %94
         %96 = OpAccessChain %19 %16 %17 %49
         %97 = OpLoad %10 %96
               OpStore %95 %97
               OpBranch %98
         %98 = OpLabel
               OpLoopMerge %100 %101 None
               OpBranch %102
        %102 = OpLabel
        %103 = OpLoad %10 %95
        %104 = OpAccessChain %19 %16 %17 %18
        %105 = OpLoad %10 %104
        %106 = OpSLessThan %46 %103 %105
               OpBranchConditional %106 %99 %100
         %99 = OpLabel
        %109 = OpLoad %7 %9
               OpStore %108 %109
               OpBranch %101
        %101 = OpLabel
        %110 = OpLoad %10 %95
        %111 = OpIAdd %10 %110 %18
               OpStore %95 %111
               OpBranch %98
        %100 = OpLabel
        %112 = OpLoad %7 %108
               OpStore %9 %112
        %117 = OpAccessChain %116 %114 %115
        %118 = OpLoad %6 %117
        %119 = OpAccessChain %31 %30 %17 %17
        %120 = OpLoad %6 %119
        %121 = OpFOrdLessThan %46 %118 %120
               OpSelectionMerge %123 None
               OpBranchConditional %121 %122 %123
        %122 = OpLabel
               OpReturn
        %123 = OpLabel
        %125 = OpAccessChain %19 %16 %17 %49
        %126 = OpLoad %10 %125
        %127 = OpConvertSToF %6 %126
        %128 = OpCompositeConstruct %7 %127 %127 %127 %127
               OpStore %9 %128
               OpBranch %67
         %67 = OpLabel
        %129 = OpLoad %10 %61
        %130 = OpIAdd %10 %129 %18
               OpStore %61 %130
               OpBranch %64
         %66 = OpLabel
               OpBranch %55
         %55 = OpLabel
        %131 = OpLoad %10 %48
        %132 = OpIAdd %10 %131 %18
               OpStore %48 %132
               OpBranch %52
         %54 = OpLabel
               OpBranch %41
         %41 = OpLabel
        %133 = OpLoad %10 %35
        %134 = OpIAdd %10 %133 %18
               OpStore %35 %134
               OpBranch %38
         %40 = OpLabel
        %135 = OpLoad %6 %25
        %136 = OpAccessChain %31 %30 %17 %18
        %137 = OpLoad %6 %136
        %138 = OpFOrdGreaterThan %46 %135 %137
               OpSelectionMerge %140 None
               OpBranchConditional %138 %139 %140
        %139 = OpLabel
        %141 = OpLoad %6 %25
        %142 = OpAccessChain %31 %30 %17 %49
        %143 = OpLoad %6 %142
        %144 = OpFOrdLessThan %46 %141 %143
               OpBranch %140
        %140 = OpLabel
        %145 = OpPhi %46 %138 %40 %144 %139
               OpSelectionMerge %147 None
               OpBranchConditional %145 %146 %161
        %146 = OpLabel
        %148 = OpAccessChain %19 %16 %17 %18
        %149 = OpLoad %10 %148
        %150 = OpConvertSToF %6 %149
        %151 = OpAccessChain %19 %16 %17 %49
        %152 = OpLoad %10 %151
        %153 = OpConvertSToF %6 %152
        %154 = OpAccessChain %19 %16 %17 %49
        %155 = OpLoad %10 %154
        %156 = OpConvertSToF %6 %155
        %157 = OpAccessChain %19 %16 %17 %18
        %158 = OpLoad %10 %157
        %159 = OpConvertSToF %6 %158
        %160 = OpCompositeConstruct %7 %150 %153 %156 %159
               OpStore %9 %160
               OpBranch %147
        %161 = OpLabel
        %162 = OpAccessChain %19 %16 %17 %49
        %163 = OpLoad %10 %162
        %164 = OpConvertSToF %6 %163
        %165 = OpCompositeConstruct %7 %164 %164 %164 %164
               OpStore %9 %165
               OpBranch %147
        %147 = OpLabel
               OpReturn
               OpFunctionEnd
