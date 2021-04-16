; SPIR-V
; Version: 1.0
; Generator: Khronos Glslang Reference Front End; 10
; Bound: 75
; Schema: 0
               OpCapability Shader
          %1 = OpExtInstImport "GLSL.std.450"
               OpMemoryModel Logical GLSL450
               OpEntryPoint Fragment %4 "main" %50
               OpExecutionMode %4 OriginUpperLeft
               OpSource ESSL 320
               OpName %4 "main"
               OpName %8 "f"
               OpName %12 "buf1"
               OpMemberName %12 0 "_GLF_uniform_float_values"
               OpName %14 ""
               OpName %22 "buf2"
               OpMemberName %22 0 "resolution"
               OpName %24 ""
               OpName %50 "_GLF_color"
               OpName %53 "buf0"
               OpMemberName %53 0 "_GLF_uniform_int_values"
               OpName %55 ""
               OpDecorate %11 ArrayStride 16
               OpMemberDecorate %12 0 Offset 0
               OpDecorate %12 Block
               OpDecorate %14 DescriptorSet 0
               OpDecorate %14 Binding 1
               OpMemberDecorate %22 0 Offset 0
               OpDecorate %22 Block
               OpDecorate %24 DescriptorSet 0
               OpDecorate %24 Binding 2
               OpDecorate %50 Location 0
               OpDecorate %52 ArrayStride 16
               OpMemberDecorate %53 0 Offset 0
               OpDecorate %53 Block
               OpDecorate %55 DescriptorSet 0
               OpDecorate %55 Binding 0
          %2 = OpTypeVoid
          %3 = OpTypeFunction %2
          %6 = OpTypeFloat 32
          %7 = OpTypePointer Function %6
          %9 = OpTypeInt 32 0
         %10 = OpConstant %9 3
         %11 = OpTypeArray %6 %10
         %12 = OpTypeStruct %11
         %13 = OpTypePointer Uniform %12
         %14 = OpVariable %13 Uniform
         %15 = OpTypeInt 32 1
         %16 = OpConstant %15 0
         %17 = OpConstant %15 1
         %18 = OpTypePointer Uniform %6
         %21 = OpTypeVector %6 2
         %22 = OpTypeStruct %21
         %23 = OpTypePointer Uniform %22
         %24 = OpVariable %23 Uniform
         %25 = OpConstant %9 0
         %29 = OpConstant %15 2
         %37 = OpConstant %9 1
         %44 = OpTypeBool
         %48 = OpTypeVector %6 4
         %49 = OpTypePointer Output %48
         %50 = OpVariable %49 Output
         %51 = OpConstant %9 2
         %52 = OpTypeArray %15 %51
         %53 = OpTypeStruct %52
         %54 = OpTypePointer Uniform %53
         %55 = OpVariable %54 Uniform
         %56 = OpTypePointer Uniform %15
          %4 = OpFunction %2 None %3
          %5 = OpLabel
          %8 = OpVariable %7 Function
         %19 = OpAccessChain %18 %14 %16 %17
         %20 = OpLoad %6 %19
         %26 = OpAccessChain %18 %24 %16 %25
         %27 = OpLoad %6 %26
         %28 = OpFMul %6 %20 %27
         %30 = OpAccessChain %18 %14 %16 %29
         %31 = OpLoad %6 %30
         %32 = OpAccessChain %18 %24 %16 %25
         %33 = OpLoad %6 %32
         %34 = OpExtInst %6 %1 Round %33
         %35 = OpFMul %6 %31 %34
         %36 = OpFAdd %6 %28 %35
         %38 = OpAccessChain %18 %24 %16 %37
         %39 = OpLoad %6 %38
         %40 = OpFAdd %6 %36 %39
               OpStore %8 %40
         %41 = OpLoad %6 %8
         %42 = OpAccessChain %18 %14 %16 %16
         %43 = OpLoad %6 %42
         %45 = OpFOrdEqual %44 %41 %43
               OpSelectionMerge %47 None
               OpBranchConditional %45 %46 %70
         %46 = OpLabel
         %57 = OpAccessChain %56 %55 %16 %16
         %58 = OpLoad %15 %57
         %59 = OpConvertSToF %6 %58
         %60 = OpAccessChain %56 %55 %16 %17
         %61 = OpLoad %15 %60
         %62 = OpConvertSToF %6 %61
         %63 = OpAccessChain %56 %55 %16 %17
         %64 = OpLoad %15 %63
         %65 = OpConvertSToF %6 %64
         %66 = OpAccessChain %56 %55 %16 %16
         %67 = OpLoad %15 %66
         %68 = OpConvertSToF %6 %67
         %69 = OpCompositeConstruct %48 %59 %62 %65 %68
               OpStore %50 %69
               OpBranch %47
         %70 = OpLabel
         %71 = OpAccessChain %56 %55 %16 %17
         %72 = OpLoad %15 %71
         %73 = OpConvertSToF %6 %72
         %74 = OpCompositeConstruct %48 %73 %73 %73 %73
               OpStore %50 %74
               OpBranch %47
         %47 = OpLabel
               OpReturn
               OpFunctionEnd
