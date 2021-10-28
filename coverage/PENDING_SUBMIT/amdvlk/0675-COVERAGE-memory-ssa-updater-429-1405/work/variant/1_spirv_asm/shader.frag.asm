; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 104
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %54 %83
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "a"
               OpName %13 "v"
               OpName %16 "i"
               OpName %27 "j"
               OpName %42 "buf0"
               OpMemberName %42 0 "_GLF_uniform_float_values"
               OpName %44 ""
               OpName %54 "gl_FragCoord"
               OpName %83 "_GLF_color"
               OpName %85 "buf1"
               OpMemberName %85 0 "_GLF_uniform_int_values"
               OpName %87 ""
               OpDecorate %41 ArrayStride 16
               OpMemberDecorate %42 0 Offset 0
               OpDecorate %42 Block
               OpDecorate %44 DescriptorSet 0
               OpDecorate %44 Binding 0
               OpDecorate %54 BuiltIn FragCoord
               OpDecorate %83 Location 0
               OpDecorate %84 ArrayStride 16
               OpMemberDecorate %85 0 Offset 0
               OpDecorate %85 Block
               OpDecorate %87 DescriptorSet 0
               OpDecorate %87 Binding 1
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeInt 32 1
          %7 = OpTypePointer Function %6
          %9 = OpConstant %6 4
         %10 = OpTypeFloat 32
         %11 = OpTypeVector %10 4
         %12 = OpTypePointer Function %11
         %14 = OpConstant %10 1
         %15 = OpConstantComposite %11 %14 %14 %14 %14
         %24 = OpConstant %6 0
         %25 = OpTypeBool
         %37 = OpConstant %6 3
         %39 = OpTypeInt 32 0
         %40 = OpConstant %39 2
         %41 = OpTypeArray %10 %40
         %42 = OpTypeStruct %41
         %43 = OpTypePointer Uniform %42
         %44 = OpVariable %43 Uniform
         %45 = OpTypePointer Uniform %10
         %48 = OpTypePointer Function %10
         %53 = OpTypePointer Input %11
         %54 = OpVariable %53 Input
         %55 = OpConstant %39 0
         %56 = OpTypePointer Input %10
         %59 = OpConstant %6 1
         %74 = OpConstant %10 0
         %75 = OpConstant %10 -1
         %76 = OpConstantComposite %11 %14 %74 %74 %75
         %77 = OpTypeVector %25 4
         %82 = OpTypePointer Output %11
         %83 = OpVariable %82 Output
         %84 = OpTypeArray %6 %40
         %85 = OpTypeStruct %84
         %86 = OpTypePointer Uniform %85
         %87 = OpVariable %86 Uniform
         %88 = OpTypePointer Uniform %6
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %13 = OpVariable %12 Function
         %16 = OpVariable %7 Function
         %27 = OpVariable %7 Function
               OpStore %8 %9
               OpStore %13 %15
         %17 = OpLoad %6 %8
               OpStore %16 %17
               OpBranch %18
         %18 = OpLabel
               OpLoopMerge %20 %21 None
               OpBranch %22
         %22 = OpLabel
         %23 = OpLoad %6 %16
         %26 = OpSGreaterThan %25 %23 %24
               OpBranchConditional %26 %19 %20
         %19 = OpLabel
         %28 = OpLoad %6 %8
               OpStore %27 %28
               OpBranch %29
         %29 = OpLabel
               OpLoopMerge %31 %32 None
               OpBranch %33
         %33 = OpLabel
         %34 = OpLoad %6 %27
         %35 = OpSGreaterThan %25 %34 %24
               OpBranchConditional %35 %30 %31
         %30 = OpLabel
         %36 = OpLoad %6 %16
         %38 = OpExtInst %6 %1 SClamp %36 %24 %37
         %46 = OpAccessChain %45 %44 %24 %24
         %47 = OpLoad %10 %46
         %49 = OpAccessChain %48 %13 %38
         %50 = OpLoad %10 %49
         %51 = OpFSub %10 %50 %47
         %52 = OpAccessChain %48 %13 %38
               OpStore %52 %51
         %57 = OpAccessChain %56 %54 %55
         %58 = OpLoad %10 %57
         %60 = OpAccessChain %45 %44 %24 %59
         %61 = OpLoad %10 %60
         %62 = OpFOrdLessThan %25 %58 %61
               OpSelectionMerge %64 None
               OpBranchConditional %62 %63 %64
         %63 = OpLabel
               OpBranch %32
         %64 = OpLabel
         %66 = OpLoad %6 %8
         %67 = OpIAdd %6 %66 %59
               OpStore %8 %67
               OpBranch %31
         %32 = OpLabel
         %69 = OpLoad %6 %27
         %70 = OpISub %6 %69 %59
               OpStore %27 %70
               OpBranch %29
         %31 = OpLabel
               OpBranch %21
         %21 = OpLabel
         %71 = OpLoad %6 %16
         %72 = OpISub %6 %71 %59
               OpStore %16 %72
               OpBranch %18
         %20 = OpLabel
         %73 = OpLoad %11 %13
         %78 = OpFOrdEqual %77 %73 %76
         %79 = OpAll %25 %78
               OpSelectionMerge %81 None
               OpBranchConditional %79 %80 %99
         %80 = OpLabel
         %89 = OpAccessChain %88 %87 %24 %24
         %90 = OpLoad %6 %89
         %91 = OpConvertSToF %10 %90
         %92 = OpAccessChain %88 %87 %24 %24
         %93 = OpLoad %6 %92
         %94 = OpConvertSToF %10 %93
         %95 = OpAccessChain %88 %87 %24 %59
         %96 = OpLoad %6 %95
         %97 = OpConvertSToF %10 %96
         %98 = OpCompositeConstruct %11 %14 %91 %94 %97
               OpStore %83 %98
               OpBranch %81
         %99 = OpLabel
        %100 = OpAccessChain %88 %87 %24 %24
        %101 = OpLoad %6 %100
        %102 = OpConvertSToF %10 %101
        %103 = OpCompositeConstruct %11 %102 %102 %102 %102
               OpStore %83 %103
               OpBranch %81
         %81 = OpLabel
               OpReturn
               OpFunctionEnd
