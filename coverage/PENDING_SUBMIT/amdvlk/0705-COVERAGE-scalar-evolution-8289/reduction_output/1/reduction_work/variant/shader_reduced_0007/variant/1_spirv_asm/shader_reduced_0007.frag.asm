; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 89
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %73
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf0"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %20 "buf_push"
               OpMemberName %20 0 "one"
               OpName %22 ""
               OpName %28 "buf1"
               OpMemberName %28 0 "_GLF_uniform_int_values"
               OpName %30 ""
               OpName %39 "a"
               OpName %43 "i"
               OpName %73 "_GLF_color"
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 0
               OpMemberDecorate %20 0 Offset 0
               OpDecorate %20 Block
               OpDecorate %27 ArrayStride 16
               OpMemberDecorate %28 0 Offset 0
               OpDecorate %28 Block
               OpDecorate %30 DescriptorSet 0
               OpDecorate %30 Binding 1
               OpDecorate %73 Location 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 1
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpTypePointer Uniform %6
         %20 = OpTypeStruct %15
         %21 = OpTypePointer PushConstant %20
         %22 = OpVariable %21 PushConstant
         %23 = OpTypePointer PushConstant %15
         %26 = OpConstant %9 2
         %27 = OpTypeArray %15 %26
         %28 = OpTypeStruct %27
         %29 = OpTypePointer Uniform %28
         %30 = OpVariable %29 Uniform
         %31 = OpTypePointer Uniform %15
         %34 = OpTypeBool
         %38 = OpTypePointer Function %15
         %40 = OpConstant %15 1
         %52 = OpConstant %15 120
         %63 = OpConstant %6 1
         %71 = OpTypeVector %6 4
         %72 = OpTypePointer Output %71
         %73 = OpVariable %72 Output
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %39 = OpVariable %38 Function
         %43 = OpVariable %38 Function
         %18 = OpAccessChain %17 %14 %16 %16
         %19 = OpLoad %6 %18
               OpStore %8 %19
         %24 = OpAccessChain %23 %22 %16
         %25 = OpLoad %15 %24
         %32 = OpAccessChain %31 %30 %16 %16
         %33 = OpLoad %15 %32
         %35 = OpSGreaterThan %34 %25 %33
               OpSelectionMerge %37 None
               OpBranchConditional %35 %36 %37
         %36 = OpLabel
         %41 = OpAccessChain %31 %30 %16 %40
         %42 = OpLoad %15 %41
               OpStore %39 %42
         %44 = OpAccessChain %31 %30 %16 %16
         %45 = OpLoad %15 %44
               OpStore %43 %45
               OpBranch %46
         %46 = OpLabel
               OpLoopMerge %48 %49 None
               OpBranch %50
         %50 = OpLabel
         %51 = OpLoad %15 %43
         %53 = OpSLessThan %34 %51 %52
               OpBranchConditional %53 %47 %48
         %47 = OpLabel
         %54 = OpAccessChain %23 %22 %16
         %55 = OpLoad %15 %54
         %56 = OpLoad %15 %39
         %57 = OpIMul %15 %56 %55
               OpStore %39 %57
               OpBranch %49
         %49 = OpLabel
         %58 = OpLoad %15 %43
         %59 = OpIAdd %15 %58 %40
               OpStore %43 %59
               OpBranch %46
         %48 = OpLabel
         %60 = OpLoad %15 %39
         %61 = OpConvertSToF %6 %60
               OpStore %8 %61
               OpBranch %37
         %37 = OpLabel
         %62 = OpLoad %6 %8
         %64 = OpExtInst %6 %1 FMax %62 %63
               OpStore %8 %64
         %65 = OpLoad %6 %8
         %66 = OpAccessChain %17 %14 %16 %16
         %67 = OpLoad %6 %66
         %68 = OpFOrdEqual %34 %65 %67
               OpSelectionMerge %70 None
               OpBranchConditional %68 %69 %84
         %69 = OpLabel
         %74 = OpAccessChain %31 %30 %16 %16
         %75 = OpLoad %15 %74
         %76 = OpConvertSToF %6 %75
         %77 = OpAccessChain %31 %30 %16 %16
         %78 = OpLoad %15 %77
         %79 = OpConvertSToF %6 %78
         %80 = OpAccessChain %31 %30 %16 %40
         %81 = OpLoad %15 %80
         %82 = OpConvertSToF %6 %81
         %83 = OpCompositeConstruct %71 %63 %76 %79 %82
               OpStore %73 %83
               OpBranch %70
         %84 = OpLabel
         %85 = OpAccessChain %31 %30 %16 %16
         %86 = OpLoad %15 %85
         %87 = OpConvertSToF %6 %86
         %88 = OpCompositeConstruct %71 %87 %87 %87 %87
               OpStore %73 %88
               OpBranch %70
         %70 = OpLabel
               OpReturn
               OpFunctionEnd
