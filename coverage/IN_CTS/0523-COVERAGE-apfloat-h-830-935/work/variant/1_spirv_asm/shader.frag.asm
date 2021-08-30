; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 119
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %70 %100
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "i"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_int_values"
               OpName %14 ""
               OpName %34 "data"
               OpName %43 "f0"
               OpName %45 "buf1"
               OpMemberName %45 0 "_GLF_uniform_float_values"
               OpName %47 ""
               OpName %51 "f1"
               OpName %63 "f2"
               OpName %70 "gl_FragCoord"
               OpName %100 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpDecorate %44 ArrayStride 16
               OpMemberDecorate %45 0 Offset 0
               OpDecorate %45 Block
               OpDecorate %47 DescriptorSet 0
               OpDecorate %47 Binding 1
               OpDecorate %70 BuiltIn FragCoord
               OpDecorate %100 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpConstant %6 0
         %16 = OpConstant %6 1
         %17 = OpTypePointer Uniform %6
         %26 = OpConstant %6 2
         %29 = OpTypeBool
         %31 = OpConstant %9 10
         %32 = OpTypeArray %6 %31
         %33 = OpTypePointer Function %32
         %41 = OpTypeFloat 32
         %42 = OpTypePointer Function %41
         %44 = OpTypeArray %41 %10
         %45 = OpTypeStruct %44
         %46 = OpTypePointer Uniform %45
         %47 = OpVariable %46 Uniform
         %48 = OpTypePointer Uniform %41
         %68 = OpTypeVector %41 4
         %69 = OpTypePointer Input %68
         %70 = OpVariable %69 Input
         %71 = OpConstant %9 0
         %72 = OpTypePointer Input %41
         %99 = OpTypePointer Output %68
        %100 = OpVariable %99 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %34 = OpVariable %33 Function
         %43 = OpVariable %42 Function
         %51 = OpVariable %42 Function
         %54 = OpVariable %42 Function
         %63 = OpVariable %42 Function
         %18 = OpAccessChain %17 %14 %15 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %24
         %24 = OpLabel
         %25 = OpLoad %6 %8
         %27 = OpAccessChain %17 %14 %15 %26
         %28 = OpLoad %6 %27
         %30 = OpSLessThan %29 %25 %28
               OpBranchConditional %30 %21 %22
         %21 = OpLabel
         %35 = OpLoad %6 %8
         %36 = OpAccessChain %17 %14 %15 %15
         %37 = OpLoad %6 %36
         %38 = OpAccessChain %7 %34 %35
               OpStore %38 %37
               OpBranch %23
         %23 = OpLabel
         %39 = OpLoad %6 %8
         %40 = OpIAdd %6 %39 %16
               OpStore %8 %40
               OpBranch %20
         %22 = OpLabel
         %49 = OpAccessChain %48 %47 %15 %16
         %50 = OpLoad %41 %49
               OpStore %43 %50
         %52 = OpLoad %41 %43
         %53 = OpIsNan %29 %52
               OpSelectionMerge %56 None
               OpBranchConditional %53 %55 %59
         %55 = OpLabel
         %57 = OpAccessChain %48 %47 %15 %16
         %58 = OpLoad %41 %57
               OpStore %54 %58
               OpBranch %56
         %59 = OpLabel
         %60 = OpAccessChain %48 %47 %15 %15
         %61 = OpLoad %41 %60
               OpStore %54 %61
               OpBranch %56
         %56 = OpLabel
         %62 = OpLoad %41 %54
               OpStore %51 %62
         %64 = OpAccessChain %48 %47 %15 %16
         %65 = OpLoad %41 %64
         %66 = OpAccessChain %48 %47 %15 %16
         %67 = OpLoad %41 %66
         %73 = OpAccessChain %72 %70 %71
         %74 = OpLoad %41 %73
         %75 = OpAccessChain %48 %47 %15 %16
         %76 = OpLoad %41 %75
         %77 = OpFAdd %41 %74 %76
         %78 = OpExtInst %41 %1 FClamp %65 %67 %77
         %79 = OpAccessChain %17 %14 %15 %15
         %80 = OpLoad %6 %79
         %81 = OpAccessChain %7 %34 %80
         %82 = OpLoad %6 %81
         %83 = OpConvertSToF %41 %82
         %84 = OpFSub %41 %78 %83
         %85 = OpExtInst %41 %1 Asinh %84
               OpStore %63 %85
         %86 = OpLoad %41 %51
         %87 = OpAccessChain %48 %47 %15 %15
         %88 = OpLoad %41 %87
         %89 = OpFOrdEqual %29 %86 %88
               OpSelectionMerge %91 None
               OpBranchConditional %89 %90 %91
         %90 = OpLabel
         %92 = OpLoad %41 %63
         %93 = OpAccessChain %48 %47 %15 %26
         %94 = OpLoad %41 %93
         %95 = OpFOrdEqual %29 %92 %94
               OpBranch %91
         %91 = OpLabel
         %96 = OpPhi %29 %89 %56 %95 %90
               OpSelectionMerge %98 None
               OpBranchConditional %96 %97 %114
         %97 = OpLabel
        %101 = OpAccessChain %17 %14 %15 %15
        %102 = OpLoad %6 %101
        %103 = OpConvertSToF %41 %102
        %104 = OpAccessChain %17 %14 %15 %16
        %105 = OpLoad %6 %104
        %106 = OpConvertSToF %41 %105
        %107 = OpAccessChain %17 %14 %15 %16
        %108 = OpLoad %6 %107
        %109 = OpConvertSToF %41 %108
        %110 = OpAccessChain %17 %14 %15 %15
        %111 = OpLoad %6 %110
        %112 = OpConvertSToF %41 %111
        %113 = OpCompositeConstruct %68 %103 %106 %109 %112
               OpStore %100 %113
               OpBranch %98
        %114 = OpLabel
        %115 = OpAccessChain %17 %14 %15 %16
        %116 = OpLoad %6 %115
        %117 = OpConvertSToF %41 %116
        %118 = OpCompositeConstruct %68 %117 %117 %117 %117
               OpStore %100 %118
               OpBranch %98
         %98 = OpLabel
               OpReturn
               OpFunctionEnd
