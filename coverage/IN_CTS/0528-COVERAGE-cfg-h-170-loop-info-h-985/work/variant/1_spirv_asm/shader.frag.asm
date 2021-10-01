; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 107
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %26 %88
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %11 "func(f1;"
               OpName %10 "x"
               OpName %26 "gl_FragCoord"
               OpName %33 "buf0"
               OpMemberName %33 0 "_GLF_uniform_float_values"
               OpName %35 ""
               OpName %61 "buf1"
               OpMemberName %61 0 "_GLF_uniform_int_values"
               OpName %63 ""
               OpName %78 "param"
               OpName %88 "_GLF_color"
               OpDecorate %26 BuiltIn FragCoord
               OpDecorate %32 ArrayStride 16
               OpMemberDecorate %33 0 Offset 0
               OpDecorate %33 Block
               OpDecorate %35 DescriptorSet 0
               OpDecorate %35 Binding 0
               OpDecorate %60 ArrayStride 16
               OpMemberDecorate %61 0 Offset 0
               OpDecorate %61 Block
               OpDecorate %63 DescriptorSet 0
               OpDecorate %63 Binding 1
               OpDecorate %88 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %8 = OpTypeInt 32 1
          %9 = OpTypeFunction %8 %7
         %18 = OpTypeBool
         %19 = OpConstantTrue %18
         %24 = OpTypeVector %6 4
         %25 = OpTypePointer Input %24
         %26 = OpVariable %25 Input
         %27 = OpTypeInt 32 0
         %28 = OpConstant %27 1
         %29 = OpTypePointer Input %6
         %32 = OpTypeArray %6 %28
         %33 = OpTypeStruct %32
         %34 = OpTypePointer Uniform %33
         %35 = OpVariable %34 Uniform
         %36 = OpConstant %8 0
         %37 = OpTypePointer Uniform %6
         %47 = OpConstant %27 0
         %59 = OpConstant %27 2
         %60 = OpTypeArray %8 %59
         %61 = OpTypeStruct %60
         %62 = OpTypePointer Uniform %61
         %63 = OpVariable %62 Uniform
         %64 = OpConstant %8 1
         %65 = OpTypePointer Uniform %8
         %87 = OpTypePointer Output %24
         %88 = OpVariable %87 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
         %78 = OpVariable %7 Function
         %79 = OpAccessChain %29 %26 %47
         %80 = OpLoad %6 %79
               OpStore %78 %80
         %81 = OpFunctionCall %8 %11 %78
         %82 = OpAccessChain %65 %63 %36 %64
         %83 = OpLoad %8 %82
         %84 = OpIEqual %18 %81 %83
               OpSelectionMerge %86 None
               OpBranchConditional %84 %85 %102
         %85 = OpLabel
         %89 = OpAccessChain %65 %63 %36 %64
         %90 = OpLoad %8 %89
         %91 = OpConvertSToF %6 %90
         %92 = OpAccessChain %65 %63 %36 %36
         %93 = OpLoad %8 %92
         %94 = OpConvertSToF %6 %93
         %95 = OpAccessChain %65 %63 %36 %36
         %96 = OpLoad %8 %95
         %97 = OpConvertSToF %6 %96
         %98 = OpAccessChain %65 %63 %36 %64
         %99 = OpLoad %8 %98
        %100 = OpConvertSToF %6 %99
        %101 = OpCompositeConstruct %24 %91 %94 %97 %100
               OpStore %88 %101
               OpBranch %86
        %102 = OpLabel
        %103 = OpAccessChain %65 %63 %36 %36
        %104 = OpLoad %8 %103
        %105 = OpConvertSToF %6 %104
        %106 = OpCompositeConstruct %24 %105 %105 %105 %105
               OpStore %88 %106
               OpBranch %86
         %86 = OpLabel
               OpReturn
               OpFunctionEnd
         %11 = OpFunction %8 None %9
         %10 = OpFunctionParameter %7
         %12 = OpLabel
               OpBranch %13
         %13 = OpLabel
               OpLoopMerge %15 %16 None
               OpBranch %17
         %17 = OpLabel
               OpBranchConditional %19 %14 %15
         %14 = OpLabel
               OpBranch %20
         %20 = OpLabel
               OpLoopMerge %22 %23 None
               OpBranch %21
         %21 = OpLabel
         %30 = OpAccessChain %29 %26 %28
         %31 = OpLoad %6 %30
         %38 = OpAccessChain %37 %35 %36 %36
         %39 = OpLoad %6 %38
         %40 = OpFOrdLessThan %18 %31 %39
               OpSelectionMerge %42 None
               OpBranchConditional %40 %41 %42
         %41 = OpLabel
               OpBranch %43
         %43 = OpLabel
               OpLoopMerge %45 %46 None
               OpBranch %44
         %44 = OpLabel
               OpBranch %46
         %46 = OpLabel
         %48 = OpAccessChain %29 %26 %47
         %49 = OpLoad %6 %48
         %50 = OpAccessChain %37 %35 %36 %36
         %51 = OpLoad %6 %50
         %52 = OpFOrdLessThan %18 %49 %51
               OpBranchConditional %52 %43 %45
         %45 = OpLabel
               OpBranch %42
         %42 = OpLabel
         %53 = OpLoad %6 %10
         %54 = OpAccessChain %37 %35 %36 %36
         %55 = OpLoad %6 %54
         %56 = OpFOrdGreaterThanEqual %18 %53 %55
               OpSelectionMerge %58 None
               OpBranchConditional %56 %57 %58
         %57 = OpLabel
         %66 = OpAccessChain %65 %63 %36 %64
         %67 = OpLoad %8 %66
               OpReturnValue %67
         %58 = OpLabel
               OpBranch %23
         %23 = OpLabel
         %69 = OpAccessChain %29 %26 %28
         %70 = OpLoad %6 %69
         %71 = OpAccessChain %37 %35 %36 %36
         %72 = OpLoad %6 %71
         %73 = OpFOrdLessThan %18 %70 %72
               OpBranchConditional %73 %20 %22
         %22 = OpLabel
               OpBranch %16
         %16 = OpLabel
               OpBranch %13
         %15 = OpLabel
         %74 = OpAccessChain %65 %63 %36 %36
         %75 = OpLoad %8 %74
               OpReturnValue %75
               OpFunctionEnd
